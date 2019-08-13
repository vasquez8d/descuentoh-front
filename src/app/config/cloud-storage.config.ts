import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CloudStorageConfig {   

    getBucketName(): string {
        return 'descuentoh_demo_images';
    }

    getBucketSearchName(): string {
        return 'descuentoh_demo_images_search';  
    }

    getUrlBucketName(): string {
        return 'gs://descuentoh_demo_images/';
    }

}
