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
import { AddProductInProductSetComponent } from './user-modal.component';
import { ProductSetService } from 'app/services/product-set.service';

@NgModule({
    declarations: [
        AddProductInProductSetComponent
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
        ProductSetService
    ]
})
export class AddProductInProductSetModule {
}
