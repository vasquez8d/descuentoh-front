import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ProductSetService } from 'app/services/product-set.service';

@Component({
    selector: 'user-modal',
    templateUrl: 'user-modal.component.html',
    styleUrls: ['./user-modal.component.scss']
})
export class AddProductInProductSetComponent implements OnInit {

    public formUser: FormGroup;
    private productSetId;

    constructor(
        public dialogRef: MatDialogRef<AddProductInProductSetComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private formBuilder: FormBuilder,
        private _productSetService: ProductSetService,
        private _matSnackBar: MatSnackBar
    ) {
        this.productSetId = data.productSetId;
    }

    ngOnInit(): void {
        this.formUser = this.formBuilder.group({
            productId: ['', Validators.required]    
        });        
    }

    addProductLabel(): void {
        const dataProductSet = {
            productSetId: this.productSetId,
            productId: this.formUser.value.productId
        };
        this._productSetService.addProductsInProductSet(dataProductSet).then((dataResponse) => {
            if (dataResponse.response === 'ok') {
                this._matSnackBar.open('Product added to productSet', 'Ok', {
                    verticalPosition: 'top',
                    duration: 2000
                });
                this.dialogRef.close(dataResponse.data);
            } else {
                this._matSnackBar.open('Oops, there was a problem and we couldnt finish your operation.', 'Ok', {
                    verticalPosition: 'top',
                    duration: 2000
                });
            }
        });        
    }
}
