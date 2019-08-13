import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceConfig } from 'app/config/service.config';

@Injectable()
export class SimilarService
{
    private urlUpdateLabels = `${this._ServiceConfig.urlServiceGcv()}/similarprod/gcs`;
    
    constructor(
        private _httpClient: HttpClient,
        private _ServiceConfig: ServiceConfig
    )
    {
    }

    searchSimilarProducts(dataFile): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.urlUpdateLabels, dataFile)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

}
