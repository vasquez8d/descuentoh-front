import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { ProductCategoryHelper } from 'app/helpers/productCategory.helper';
import { GoogleCloudStorageHelper } from 'app/helpers/googleCloudStorageHelper';
import { MatDialogModule, MatListModule } from '@angular/material';
import { ProductImageReferenceService } from 'app/services/product-image-reference.service';
import { ProductLabelsService } from 'app/services/product-labels.service';
import { ProductSetsComponent } from './products/products.component';
import { ProductSetComponent } from './product/product.component';
import { ProductSetsService } from 'app/services/product-sets.service';
import { ProductSetService } from 'app/services/product-set.service';
import { AddProductInProductSetComponent } from './add-product/user-modal.component';
import { AddProductInProductSetModule } from './add-product/user-modal.module';


const routes: Routes = [
    {
        path     : '',
        component: ProductSetsComponent,
        resolve  : {
            data: ProductSetsService
        }
    },
    {
        path     : ':id',
        component: ProductSetComponent,
        resolve  : {
            data: ProductSetService
        }
    },
    {
        path     : ':id/:handle',
        component: ProductSetComponent,
        resolve  : {
            data: ProductSetService
        }
    }
];

@NgModule({
    declarations: [
        ProductSetComponent,
        ProductSetsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,

        NgxChartsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),

        FuseSharedModule,
        FuseWidgetModule,
        MatDialogModule,
        MatListModule,
        AddProductInProductSetModule
    ],
    providers   : [
        ProductSetService,
        ProductSetsService,
        ProductCategoryHelper,
        GoogleCloudStorageHelper,
        ProductImageReferenceService,        
        ProductLabelsService
    ],
    entryComponents: [
        AddProductInProductSetComponent
    ]
})
export class ProductSetModule
{
}
