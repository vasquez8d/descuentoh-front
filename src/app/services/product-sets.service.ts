import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServiceConfig } from 'app/config/service.config';

@Injectable()
export class ProductSetsService implements Resolve<any>
{
    products: any[];
    onProductsChanged: BehaviorSubject<any>;

    private urlListProducts = `${this._ServiceConfig.urlServiceGcv()}/productset/list`;

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
        this.onProductsChanged = new BehaviorSubject({});
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
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getProducts()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get products
     *
     * @returns {Promise<any>}
     */
    getProducts(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.get(this.urlListProducts)
                .subscribe((response: any) => {
                    if (response.response === 'ok') {
                        this.products = response.data;
                        this.onProductsChanged.next(this.products);
                        resolve(response);
                    }
                }, reject);
        });
    }
}
