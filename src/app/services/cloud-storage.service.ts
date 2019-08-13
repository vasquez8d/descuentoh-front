import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceConfig } from 'app/config/service.config';

@Injectable()
export class CloudStorageService
{
    private urlImagesRefence = `${this._ServiceConfig.urlServiceGcv()}/storage/upload`;
    private urlCreateImageRef = `${this._ServiceConfig.urlServiceGcv()}/imageref/create`;
    
    constructor(
        private _httpClient: HttpClient,
        private _ServiceConfig: ServiceConfig
    )
    {
    }

    postUploadImage(dataImage): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this._httpClient.post(this.urlImagesRefence, dataImage)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

}
