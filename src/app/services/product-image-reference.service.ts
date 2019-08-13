import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceConfig } from 'app/config/service.config';

@Injectable()
export class ProductImageReferenceService
{
    private urlDeleteImageRef = `${this._ServiceConfig.urlServiceGcv()}/imageref/delete/`;
    private urlCreateImageRef = `${this._ServiceConfig.urlServiceGcv()}/imageref/create`;
    
    constructor(
        private _httpClient: HttpClient,
        private _ServiceConfig: ServiceConfig
    )
    {
    }

    createReferenceImage(dataProduct): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.urlCreateImageRef, dataProduct)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    deleteImageReference(dataDeleteReference: { productId: string; referenceImageId: string; }): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.delete(this.urlDeleteImageRef + dataDeleteReference.productId + '/' + dataDeleteReference.referenceImageId)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

}
