import { Component, OnDestroy, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, Observable } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';
import { Product } from '../../../model/product.model';
import { ProductCategoryHelper } from 'app/helpers/productCategory.helper';
import { Router, ActivatedRoute } from '@angular/router';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { SimilarService } from 'app/services/similar.service';
import { ProductSetsService } from 'app/services/product-sets.service';
import { CloudStorageConfig } from 'app/config/cloud-storage.config';
import { CloudStorageService } from 'app/services/cloud-storage.service';
import { GoogleCloudStorageHelper } from 'app/helpers/googleCloudStorageHelper';
import { MatStepper, MatDialog } from '@angular/material';
import { FiltersComponent } from '../filters/filters.component';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

@Component({
    selector: 'similar-products',
    templateUrl: './similar.component.html',
    styleUrls: ['./similar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class SimilarComponent implements OnInit, OnDestroy {
    @ViewChild('stepper', { static: false }) stepper: MatStepper;

    product: Product;
    pageType: string;
    productForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    productCategories = [];
    productImagesReference = [];
    productSets = [];

    showImageReferences = false;
    showImage = false;
    private fileToUpload: File = null;

    public btnTakePhoto: MatProgressButtonOptions = {
        active: false,
        text: 'Spinner Button',
        spinnerSize: 18,
        raised: true,
        fab: true,
        stroked: false,
        buttonColor: 'primary',
        spinnerColor: 'accent',
        fullWidth: false,
        disabled: false,
        mode: 'indeterminate',
        icon: 'photo_camera'
    };

    public showWebcam = true;
    public allowCameraSwitch = true;
    public multipleWebcamsAvailable = false;
    public deviceId: string;
    public videoOptions: MediaTrackConstraints = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
    };
    public errors: WebcamInitError[] = [];

    // latest snapshot
    public webcamImage: WebcamImage = null;

    // webcam snapshot trigger
    private trigger: Subject<void> = new Subject<void>();
    // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
    private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

    public showBtnNewPhoto = false;
    public showBtnPhoto = true;
    public showParams = false;

    constructor(
        private _formBuilder: FormBuilder,
        private _ProductCategoryHelper: ProductCategoryHelper,
        private _similarService: SimilarService,
        private _productSetsService: ProductSetsService,
        private _cloudStorageConfig: CloudStorageConfig,
        private _cloudStorageService: CloudStorageService,
        private _googleCloudStorageHelper: GoogleCloudStorageHelper,
        public dialog: MatDialog,
        private _activeRouter: ActivatedRoute,
        private _matSnackBar: MatSnackBar) {
        this.product = new Product();
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.productForm = this._formBuilder.group({
            imageBase64: [''],
            productSetId: ['', Validators.required],
            productCategory: ['', Validators.required],
            bucketName: [this._cloudStorageConfig.getBucketSearchName()],
            gcsImageUri: ['']
        });
        this.productCategories = this._ProductCategoryHelper.getProductCategories();
        this._productSetsService.getProducts().then((dataResponse) => {
            if (dataResponse.response === 'ok') {
                dataResponse.data.forEach((element, index) => {
                    const dataProductSet = {
                        productSetId: element.name.split('/')[5],
                        displayName: element.displayName
                    };
                    this.productSets.push(dataProductSet);
                    if (index === (dataResponse.data.length - 1)) {
                        this.loadDefaultParams();
                    }
                });
            }
        });
        WebcamUtil.getAvailableVideoInputs()
            .then((mediaDevices: MediaDeviceInfo[]) => {
                this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
            });        
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    loadDefaultParams(): void {
        this._activeRouter.params.subscribe(
            params => {
                if (params.productCategory && params.productSetId) {
                    const dataCategory = this.productCategories.find(x => x.category_id === params.productCategory);
                    if (dataCategory != null) {
                        this.productForm.controls.productCategory.setValue(params.productCategory);
                    } else {
                        this.showParams = true;
                    }
                    const dataProductSets = this.productSets.find(x => x.productSetId === params.productSetId);                
                    if (dataProductSets != null) {
                        this.productForm.controls.productSetId.setValue(params.productSetId);
                    } else {
                        this.showParams = true;
                    }                
                } else {
                    this.showParams = true;
                }
            }
        );
    }

    handleFileInput(event): void {
        this.fileToUpload = event.target.files[0] as File;
        this.productForm.controls.imageName.setValue(this.fileToUpload.name);
        const reader = new FileReader();
        reader.readAsDataURL(this.fileToUpload);
        reader.onload = () => {
            this.productForm.controls.imageBase64.setValue(reader.result);
            this.showImage = true;
            this.btnTakePhoto.disabled = false;
        };
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    }

    productDetails(product): void {
        const productLink = 'product/' + product.name.split('/')[5] + '/details';
        window.open(productLink, '_blank');
    }

    getProductDiscount(product): string {
        let discount = 0;
        const percentDiscount = Number(product.DISCOUNT);
        const productPrice = Number(product.PRICE);
        discount = productPrice - (productPrice * (percentDiscount / 100));
        return discount.toFixed(2).toString();
    }

    showFiltersModal(): void {
        const dialogRef = this.dialog.open(FiltersComponent, {
            data: {
                products: this.productImagesReference
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.productForm.controls.productLabels.setValue(result);
        });
    }


    public triggerSnapshot(): void {
        this.trigger.next();
    }

    public toggleWebcam(): void {
        this.showWebcam = !this.showWebcam;
    }

    public handleInitError(error: WebcamInitError): void {
        this.errors.push(error);
    }

    public showNextWebcam(directionOrDeviceId: boolean | string): void {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    }

    public handleImage(webcamImage: WebcamImage): void {
        if (this.productForm.invalid) {
            this._matSnackBar.open('Please complete the form', 'Ok', {
                verticalPosition: 'top',
                duration: 2000
            });
        } else {
            this.showWebcam = false;

            this.btnTakePhoto.active = true;
            this.webcamImage = webcamImage;

            this.productImagesReference = [];
            this.showImageReferences = false;

            const imageToUpload = {
                bucketName: this.productForm.value.bucketName,
                imageBase64: this.webcamImage.imageAsDataUrl
            };
            this._cloudStorageService.postUploadImage(imageToUpload).then((dataResult) => {
                if (dataResult.response === 'ok') {
                    this.productForm.controls.gcsImageUri.setValue(dataResult.data.uri);
                    const dataSearch = {
                        productSetId: this.productForm.value.productSetId,
                        productCategory: this.productForm.value.productCategory,
                        gcsImageUri: this.productForm.value.gcsImageUri
                    };
                    this._similarService.searchSimilarProducts(dataSearch).then((dataResponse) => {
                        if (dataResponse.response === 'ok') {
                            this._matSnackBar.open(dataResponse.data.length + ' similar products were found.', 'Ok', {
                                verticalPosition: 'top',
                                duration: 2000
                            });
                            this.showImageReferences = true;
                            this.stepper.next();
                            
                            this.showBtnNewPhoto = true;
                            this.showBtnPhoto = false;

                            dataResponse.data.forEach((element, index) => {
                                const dataImage = {
                                    image_url: this._googleCloudStorageHelper.getImageUrlSearch(this._cloudStorageConfig.getBucketName(), element.image.split('/')[7]),
                                    product: element.product,
                                    score: (element.score * 100).toFixed(2).toString() + ' %'
                                };
                                this.productImagesReference.push(dataImage);
                                if (index === (dataResponse.data.length - 1)) {
                                    this.productImagesReference.forEach((elementX, indexX) => {
                                        elementX.product.productLabels.forEach(elementY => {
                                            this.productImagesReference[indexX][elementY.key] = elementY.value;
                                        });
                                    });
                                }
                            });
                        } else {
                            this.btnTakePhoto.active = false;
                            this._matSnackBar.open('There is no match.', 'Ok', {
                                verticalPosition: 'top',
                                duration: 2000
                            });
                        }
                    }).finally(() => {
                        this.btnTakePhoto.active = false;
                    });
                } else {
                    this.btnTakePhoto.active = false;
                    this._matSnackBar.open('Oops, there was a problem and we couldnt finish your operation. Please try again.', 'Ok', {
                        verticalPosition: 'top',
                        duration: 2000
                    });
                }
            }).finally(() => {
                this.btnTakePhoto.active = false;
            });
        }
    }

    public cameraWasSwitched(deviceId: string): void {
        this.deviceId = deviceId;
    }

    public get triggerObservable(): Observable<void> {
        return this.trigger.asObservable();
    }

    public get nextWebcamObservable(): Observable<boolean | string> {
        return this.nextWebcam.asObservable();
    }

    takeNewPhoto(): void {
        this.showWebcam = true;
        this.showBtnNewPhoto = false;
        this.showBtnPhoto = true;
    }
}
