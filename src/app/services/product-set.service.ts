import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServiceConfig } from 'app/config/service.config';

@Injectable()
export class ProductSetService implements Resolve<any>
{
    routeParams: any;
    product: any;
    onProductChanged: BehaviorSubject<any>;

    private urlDetailsProduct = `${this._ServiceConfig.urlServiceGcv()}/productset/details/`;
    private urlCreateProduct = `${this._ServiceConfig.urlServiceGcv()}/productset/create`;
    private urlRemoveProductSet = `${this._ServiceConfig.urlServiceGcv()}/productset/delete/`;
    private urlProductsInProductSet = `${this._ServiceConfig.urlServiceGcv()}/productsearch/list-products/`;
    private urlAddProductsInProductSet = `${this._ServiceConfig.urlServiceGcv()}/productsearch/add-product`;
    private urlRemoveProductsInProductSet = `${this._ServiceConfig.urlServiceGcv()}/productsearch/remove-product/`;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient,
        private _ServiceConfig: ServiceConfig
    )
    {
        // Set the defaults
        this.onProductChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getProduct()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get product
     *
     * @returns {Promise<any>}
     */
    getProduct(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            if ( this.routeParams.id === 'new' )
            {
                this.onProductChanged.next(false);
                resolve(false);
            }
            else
            {
                this._httpClient.get(this.urlDetailsProduct + this.routeParams.id)
                    .subscribe((response: any) => {
                        if (response.response === 'ok') {
                            this.product = response.data;
                            this.onProductChanged.next(this.product);
                            resolve(response);
                        }
                    }, reject);
            }
        });
    }

    /**
     * Save product
     *
     * @param product
     * @returns {Promise<any>}
     */
    saveProduct(product): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post('api/e-commerce-products/' + product.id, product)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Add product
     *
     * @param product
     * @returns {Promise<any>}
     */
    addProduct(product): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.urlCreateProduct, product)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    getProductsInProductSet(productSetId): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.urlProductsInProductSet + productSetId)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
    addProductsInProductSet(dataProduct): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.urlAddProductsInProductSet, dataProduct)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    removeProductInProductSet(dataProduct): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.delete(this.urlRemoveProductsInProductSet + dataProduct.productSetId + '/' + dataProduct.productId)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    deleteProductSet(productSetId): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.delete(this.urlRemoveProductSet + productSetId)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
