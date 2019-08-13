import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { CloudStorageService } from 'app/services/cloud-storage.service';
import { CloudStorageConfig } from 'app/config/cloud-storage.config';
import { ProductImageReferenceService } from 'app/services/product-image-reference.service';
import { MatProgressButtonOptions } from 'mat-progress-buttons';

@Component({
    selector: 'user-modal',
    templateUrl: 'user-modal.component.html',
    styleUrls: ['./user-modal.component.scss']
})
export class CreateImageReferenceComponent implements OnInit {

    public formUser: FormGroup;
    private fileToUpload: File = null;
    public showImage = false;
    private productId;
    public boundingPolys = [];

    public btnUploadOptions: MatProgressButtonOptions = {
        active: false,
        text: 'Confirm',
        buttonColor: 'accent',
        barColor: 'accent',
        raised: false,
        stroked: true,
        flat: false,
        mode: 'indeterminate',
        value: 0,
        disabled: true
    };

    constructor(
        public dialogRef: MatDialogRef<CreateImageReferenceComponent>,
        private _cloudStorageService: CloudStorageService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private formBuilder: FormBuilder,
        private _cloudStorageConfig: CloudStorageConfig,
        private _productImageReferenceService: ProductImageReferenceService,
        private _matSnackBar: MatSnackBar
    ) {
        this.productId = data.productId;
    }

    ngOnInit(): void {
        this.formUser = this.formBuilder.group({
            imageName: ['', Validators.required],
            imageBase64: ['', Validators.required],
            bucketName: [this._cloudStorageConfig.getBucketName()]
        });
    }

    handleFileInput(event): void {
        this.fileToUpload = event.target.files[0] as File;
        this.formUser.controls.imageName.setValue(this.fileToUpload.name);
        const reader = new FileReader();
        reader.readAsDataURL(this.fileToUpload);
        reader.onload = () => {
            this.formUser.controls.imageBase64.setValue(reader.result);
            this.showImage = true;
            this.btnUploadOptions.disabled = false;
        };
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    }

    addReference(): void {
        this.btnUploadOptions.active = true;
        this.btnUploadOptions.text = 'Uploading...';

        const imageToUpload = {
            bucketName: this.formUser.value.bucketName,
            imageBase64: this.formUser.value.imageBase64
        };
        this._cloudStorageService.postUploadImage(imageToUpload).then((dataResult) => {
            if (dataResult.response === 'ok') {
                dataResult.data.cropHints.forEach(element => {
                    this.boundingPolys.push(element.boundingPoly);
                });
                const dataReference = {
                    referenceImageId: dataResult.data.imageId,
                    gcsUri: dataResult.data.uri,
                    productId: this.productId,
                    boundingPolys: this.boundingPolys
                };
                this._productImageReferenceService.createReferenceImage(dataReference).then((resRef) => {
                    this.btnUploadOptions.active = false;                    
                    if (resRef.response === 'ok') {
                        this._matSnackBar.open('Reference created', 'Ok', {
                            verticalPosition: 'top',
                            duration: 2000
                        });
                        resRef.data.boundingPolys = this.boundingPolys;
                        this.dialogRef.close(resRef.data);
                    } else {
                        this._matSnackBar.open('Oops, there was a problem and we couldnt finish your operation.', 'Ok', {
                            verticalPosition: 'top',
                            duration: 2000
                        });
                        this.btnUploadOptions.text = 'Error';
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
}
