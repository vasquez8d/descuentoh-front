import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';
import { Product } from '../../../model/product.model';
import { MatDialog } from '@angular/material';
import { ProductSetService } from 'app/services/product-set.service';
import { AddProductInProductSetComponent } from '../add-product/user-modal.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'e-commerce-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ProductSetComponent implements OnInit, OnDestroy {
    product: Product;
    pageType: string;
    productForm: FormGroup;
    // Private
    private _unsubscribeAll: Subject<any>;

    productsInProductSet = [];
    /**
     * Constructor
     *
     * @param {EcommerceProductService} _ecommerceProductService
     * @param {FormBuilder} _formBuilder
     * @param {Location} _location
     * @param {MatSnackBar} _matSnackBar
     */
    constructor(
        private _ecommerceProductService: ProductSetService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar,
        public dialog: MatDialog,
        private _router: Router
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
        this._ecommerceProductService.onProductChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(product => {

                if (product) {
                    this.product = new Product(product);
                    this.pageType = 'edit';
                }
                else {
                    this.pageType = 'new';
                    this.product = new Product();
                }

                this.productForm = this.createProductForm();
            });
        this.loadProductsInProductSet();
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
            description: [this.product.description],
            displayName: [this.product.displayName, Validators.required]
        });
    }

    /**
     * Save product
     */
    saveProduct(): void {
        // const data = this.productForm.getRawValue();
        // data.handle = FuseUtils.handleize(data.name);

        // this._ecommerceProductService.saveProduct(data)
        //     .then(() => {

        //         // Trigger the subscription with new data
        //         this._ecommerceProductService.onProductChanged.next(data);

        //         // Show the success message
        //         this._matSnackBar.open('Product saved', 'OK', {
        //             verticalPosition: 'top',
        //             duration: 2000
        //         });
        //     });
    }

    /**
     * Add product
     */
    addProduct(): void {
        const dataCreate = {
            productSetDisplayName: this.productForm.value.displayName
        };
        this._ecommerceProductService.addProduct(dataCreate).then((dataReponse) => {
            if (dataReponse.response === 'ok') {
                this._matSnackBar.open('ProductSet created', 'Ok', {
                    verticalPosition: 'top',
                    duration: 2000
                });
                const productSetId = dataReponse.data.name.split('/')[5];
                this._router.navigateByUrl('product-set/' + productSetId + '/details');
            } else {
                this._matSnackBar.open('Oops, there was a problem and we couldnt finish your operation.', 'Ok', {
                    verticalPosition: 'top',
                    duration: 2000
                });
            }
        });
    }

    loadProductsInProductSet(): void {
        this._ecommerceProductService.getProductsInProductSet(this.product.id).then((data) => {
            if (data.response === 'ok') {
                this.productsInProductSet = data.data;
            }
        });
    }

    addProductInProductSet(): void {
        const dialogRef = this.dialog.open(AddProductInProductSetComponent, {
            data: {
                productSetId: this.product.id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.loadProductsInProductSet();
        });
    }

    detailsProductInProductSet(productName): void {
        const productId = productName.split('/')[5];
        this._router.navigateByUrl('/product/' + productId + '/details');
    }

    deleteProductInProductSet(productName): void {
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
                const productId = productName.split('/')[5];
                const dataRemove = {
                    productId: productId,
                    productSetId: this.product.id
                };
                this._ecommerceProductService.removeProductInProductSet(dataRemove).then((dataResponse) => {
                    if (dataResponse.response === 'ok') {
                        this._matSnackBar.open('Product removed from productSet', 'Ok', {
                            verticalPosition: 'top',
                            duration: 2000
                        });
                        
                        this.productsInProductSet.forEach((element, index) => {
                            if (element.name === productName) {
                                this.productsInProductSet.splice(index, 1);
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

    deleteProductSet(): void {
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
                this._ecommerceProductService.deleteProductSet(this.product.id).then((dataResponse) => {
                    console.log(dataResponse);
                    if (dataResponse.response === 'ok') {
                        this._matSnackBar.open('ProductSet removed', 'Ok', {
                            verticalPosition: 'top',
                            duration: 2000
                        });
                        this._router.navigateByUrl('/product-set');
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
}
