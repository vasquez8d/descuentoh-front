import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceConfig } from 'app/config/service.config';

@Injectable()
export class ProductLabelsService
{
    private urlUpdateLabels = `${this._ServiceConfig.urlServiceGcv()}/product/update-labels`;
    
    constructor(
        private _httpClient: HttpClient,
        private _ServiceConfig: ServiceConfig
    )
    {
    }

    updateProductLabels(dataProduct): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.patch(this.urlUpdateLabels, dataProduct)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

}
