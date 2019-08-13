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

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { EcommerceProductsComponent } from './products/products.component';
import { EcommerceProductComponent } from './product/product.component';
import { ProductCategoryHelper } from 'app/helpers/productCategory.helper';
import { GoogleCloudStorageHelper } from 'app/helpers/googleCloudStorageHelper';
import { CreateImageReferenceComponent } from '../cloud-images/create-reference/user-modal.component';
import { CreateImageReferenceModule } from '../cloud-images/create-reference/user-modal.module';
import { MatDialogModule, MatListModule } from '@angular/material';
import { ProductImageReferenceService } from 'app/services/product-image-reference.service';
import { AddProductLabelComponent } from './product-labels/user-modal.component';
import { AddProductLabelModule } from './product-labels/user-modal.module';
import { ProductLabelsService } from 'app/services/product-labels.service';
import { ProductsService } from 'app/services/products.service';
import { ProductService } from 'app/services/product.service';
import { ProductLabelHelper } from 'app/helpers/product-label.helper';


const routes: Routes = [
    {
        path     : '',
        component: EcommerceProductsComponent,
        resolve  : {
            data: ProductsService
        }
    },
    {
        path     : ':id',
        component: EcommerceProductComponent,
        resolve  : {
            data: ProductService
        }
    },
    {
        path     : ':id/:handle',
        component: EcommerceProductComponent,
        resolve  : {
            data: ProductService
        }
    }
];

@NgModule({
    declarations: [
        EcommerceProductsComponent,
        EcommerceProductComponent
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

        FuseSharedModule,
        FuseWidgetModule,
        CreateImageReferenceModule,
        MatDialogModule,
        AddProductLabelModule,
        MatListModule
    ],
    providers   : [
        ProductService,
        ProductsService,
        ProductCategoryHelper,
        GoogleCloudStorageHelper,
        ProductImageReferenceService,        
        ProductLabelsService,
        ProductLabelHelper
    ],
    entryComponents : [
        CreateImageReferenceComponent,
        AddProductLabelComponent
    ]
})
export class ProductModule
{
}
