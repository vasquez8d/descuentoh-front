import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { Product } from '../../../model/product.model';
import { ProductCategoryHelper } from 'app/helpers/productCategory.helper';
import { GoogleCloudStorageHelper } from 'app/helpers/googleCloudStorageHelper';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material';
import { CreateImageReferenceComponent } from 'app/main/cloud-images/create-reference/user-modal.component';
import { ProductImageReferenceService } from 'app/services/product-image-reference.service';
import { AddProductLabelComponent } from '../product-labels/user-modal.component';
import { ProductLabelsService } from 'app/services/product-labels.service';
import { ProductService } from 'app/services/product.service';
import { ProductLabelHelper } from 'app/helpers/product-label.helper';

@Component({
    selector: 'e-commerce-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class EcommerceProductComponent implements OnInit, OnDestroy {
    product: Product;
    pageType: string;
    productForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    productCategories = [];
    productImagesReference = [];
    /**
     * Constructor
     *
     * @param {EcommerceProductService} _ecommerceProductService
     * @param {FormBuilder} _formBuilder
     * @param {Location} _location
     * @param {MatSnackBar} _matSnackBar
     */
    constructor(
        private _productService: ProductService,
        private _formBuilder: FormBuilder,
        private _matSnackBar: MatSnackBar,
        private _ProductCategoryHelper: ProductCategoryHelper,
        private _googleCloudStorageHelper: GoogleCloudStorageHelper,
        private _productImageReferenceService: ProductImageReferenceService,
        private _router: Router,
        public dialog: MatDialog,
        private _productLabelService: ProductLabelsService,
    ) {
        // Set the default
        this.product = new Product();

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to update product on changes
        this._productService.onProductChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(product => {

                if (product) {
                    this.product = new Product(product);
                    this.pageType = 'edit';
                    this.loadImageRefences(this.product.id);
                }
                else {
                    this.pageType = 'new';
                    this.product = new Product();
                }

                this.productForm = this.createProductForm();
            });
        this.productCategories = this._ProductCategoryHelper.getProductCategories();
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

    /**
     * Create product form
     *
     * @returns {FormGroup}
     */
    createProductForm(): FormGroup {
        return this._formBuilder.group({
            id: [this.product.id],
            name: [this.product.name],
            displayName: [this.product.displayName, Validators.required],
            description: [this.product.description, Validators.required],            
            productCategory: [this.product.productCategory, Validators.required],
            productLabels: [this.product.productLabels]            
        });
    }

    addProduct(): void {
        const data = this.productForm.getRawValue();
        this._productService.createProduct(data).then((dataResponse) => {
            if (dataResponse.response === 'ok') {
                this._matSnackBar.open('Product added', 'Ok', {
                    verticalPosition: 'top',
                    duration: 2000
                });
                this._router.navigateByUrl('/product/' + dataResponse.data.name.split('/')[5] + '/details');
            } else {
                this._matSnackBar.open('Oops, there was a problem and we couldnt finish your operation.', 'Ok', {
                    verticalPosition: 'top',
                    duration: 2000
                });
            }
        });
    }

    deleteProduct(): void {

        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this._productService.deleteProduct(this.product.id).then((resDelete) => {
                    if (resDelete.response === 'ok') {
                        this._matSnackBar.open('Product removed', 'Ok', {
                            verticalPosition: 'top',
                            duration: 2000
                        });
                        this._router.navigateByUrl('/product');
                    } else {
                        this._matSnackBar.open('Oops, there was a problem and we couldnt finish your operation.', 'Ok', {
                            verticalPosition: 'top',
                            duration: 2000
                        });
                    }
                });
            }
        });

    }

    loadImageRefences(productId: string): void {
        this._productService.getImageReferences(productId).then((res) => {
            if (res.response === 'ok') {
                this.productImagesReference = res.data;
                this.productImagesReference.forEach((element, index) => {
                    this.productImagesReference[index]['image_url'] = this._googleCloudStorageHelper.getImageUrl(element.uri);
                }); 
            }
        });
    }

    addImageReference(): void {
        const dialogRef = this.dialog.open(CreateImageReferenceComponent, {
            data: {
                productId: this.product.id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result != null) {
                const dataUpload = {
                    image_url: this._googleCloudStorageHelper.getImageUrl(result.uri),
                    uri: result.uri,
                    name: result.name,
                    boundingPolys: result.boundingPolys
                };
                this.productImagesReference.push(dataUpload);
            }
        });
    }

    deleteImageReference(imageUri: string): void {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                const dataDeleteReference = {
                    productId: this.product.id,
                    referenceImageId: imageUri.split('/')[3]
                };
                this._productImageReferenceService.deleteImageReference(dataDeleteReference).then((dataResult) => {
                    if (dataResult.response === 'ok') {
                        this._matSnackBar.open('Reference image removed', 'Ok', {
                            verticalPosition: 'top',
                            duration: 2000
                        });
                        this.productImagesReference.forEach((element, index) => {
                            if (element.uri === imageUri) {
                                this.productImagesReference.splice(index, 1);
                            }
                        });
                    } else {
                        this._matSnackBar.open('Oops, there was a problem and we couldnt finish your operation.', 'Ok', {
                            verticalPosition: 'top',
                            duration: 2000
                        });
                    }
                });
            }
        });
    }

    fullViewImageReference(imageUrl: string): void {        
        window.open(imageUrl, '_blank');
    }

    addProductLabel(): void {
        const currentLabels = this.productForm.value.productLabels || [];
        const dialogRef = this.dialog.open(AddProductLabelComponent, {
            data: {
                productId: this.product.id,
                productLabels: currentLabels,
                pageType: this.pageType
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.productForm.controls.productLabels.setValue(result);
        });
    }

    removeProductLabel(labelIndex): void {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                const currentLabels = this.productForm.value.productLabels || [];
                currentLabels.splice(labelIndex, 1);
                const dateLabelsUpdate = {
                    productId: this.product.id,
                    productLabels: currentLabels
                };
                if (this.pageType === 'edit') {
                    this._productLabelService.updateProductLabels(dateLabelsUpdate).then((dataReturn) => {
                        if (dataReturn.response === 'ok') {
                            this._matSnackBar.open('Product label removed', 'Ok', {
                                verticalPosition: 'top',
                                duration: 2000
                            });
                        } else {
                            this._matSnackBar.open('Oops, there was a problem and we couldnt finish your operation.', 'Ok', {
                                verticalPosition: 'top',
                                duration: 2000
                            });
                        }
                    });
                }
            }
        });
    }
}
