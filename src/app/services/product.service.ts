import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServiceConfig } from 'app/config/service.config';

@Injectable()
export class ProductService implements Resolve<any>
{
    routeParams: any;
    product: any;
    onProductChanged: BehaviorSubject<any>;

    private urlDetailsProduct = `${this._ServiceConfig.urlServiceGcv()}/product/details/`;
    private urlImagesRefence = `${this._ServiceConfig.urlServiceGcv()}/imageref/list/`;    
    private urlDeleteProduct = `${this._ServiceConfig.urlServiceGcv()}/product/delete/`;
    private urlCreateProduct = `${this._ServiceConfig.urlServiceGcv()}/product/create`;

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

    getImageReferences(productId): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.urlImagesRefence + productId)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    deleteProduct(productId): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.delete(this.urlDeleteProduct + productId)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    createProduct(dataProduct): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.urlCreateProduct, dataProduct)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }
}
