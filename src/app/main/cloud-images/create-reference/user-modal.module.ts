import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatProgressButtonsModule } from 'mat-progress-buttons';

import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatSnackBarModule,
    MatTreeModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { CreateImageReferenceComponent } from './user-modal.component';
import { CloudStorageService } from 'app/services/cloud-storage.service';
import { ProductImageReferenceService } from 'app/services/product-image-reference.service';

@NgModule({
    declarations: [
        CreateImageReferenceComponent
    ],
    imports: [
        RouterModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatStepperModule,
        FuseSharedModule,
        MatSnackBarModule,
        MatProgressButtonsModule
    ],
    providers : [
        CloudStorageService,
        ProductImageReferenceService
    ]
})
export class CreateImageReferenceModule {
}
