import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatSnackBarModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { AddProductLabelComponent } from './user-modal.component';
import { ProductLabelsService } from 'app/services/product-labels.service';
import { ProductLabelHelper } from 'app/helpers/product-label.helper';

@NgModule({
    declarations: [
        AddProductLabelComponent
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
        MatSnackBarModule
    ],
    providers: [
        ProductLabelsService,
        ProductLabelHelper
    ]
})
export class AddProductLabelModule {
}
