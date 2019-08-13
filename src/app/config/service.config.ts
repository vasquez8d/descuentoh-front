import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ServiceConfig {   

    urlServiceGcv(): string {
        return 'https://localhost:1337/api/v1/gcloud';
    }

}
