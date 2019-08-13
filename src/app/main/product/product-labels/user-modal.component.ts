import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ProductLabelsService } from 'app/services/product-labels.service';
import { ProductLabelHelper } from 'app/helpers/product-label.helper';

@Component({
    selector: 'user-modal',
    templateUrl: 'user-modal.component.html',
    styleUrls: ['./user-modal.component.scss']
})
export class AddProductLabelComponent implements OnInit {

    public formUser: FormGroup;
    private productId;
    private productLabels = [];
    public productLabelKeys = [];

    private pageType: string;
    constructor(
        public dialogRef: MatDialogRef<AddProductLabelComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private formBuilder: FormBuilder,
        private _productLabelsService: ProductLabelsService,
        private _productLabelHelper: ProductLabelHelper,
        private _matSnackBar: MatSnackBar 
    ) {
        this.productId = data.productId;
        this.productLabels = data.productLabels;
        this.pageType = data.pageType;
    }

    ngOnInit(): void {
        this.formUser = this.formBuilder.group({
            key: ['', Validators.required],
            value: ['', Validators.required]            
        });        
        this.productLabelKeys = this._productLabelHelper.getKeys();
        this. productLabels.forEach((elementX) => {
            this.productLabelKeys.forEach((elementY, index) => {
                if (elementX.key === elementY.key) {
                    this.productLabelKeys.splice(index, 1);
                }
            });
        });
    }

    addProductLabel(): void {
        this.productLabels.push(this.formUser.value);
        if (this.pageType === 'new') {
            this.dialogRef.close(this.productLabels);
        } else {
            const dateLabelsUpdate = {
                productId: this.productId,
                productLabels: this.productLabels,
            };
            this._productLabelsService.updateProductLabels(dateLabelsUpdate).then((dataResponse) => {
                if (dataResponse.response === 'ok') {
                    this._matSnackBar.open('Product label added', 'Ok', {
                        verticalPosition: 'top',
                        duration: 2000
                    });
                    this.dialogRef.close(this.productLabels);
                } else {
                    this._matSnackBar.open('Oops, there was a problem and we couldnt finish your operation.', 'Ok', {
                        verticalPosition: 'top',
                        duration: 2000
                    });
                }
            });
        }
    }
}
