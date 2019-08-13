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
import { SimilarComponent } from './similar/similar.component';
import { SimilarService } from 'app/services/similar.service';
import { ProductCategoryHelper } from 'app/helpers/productCategory.helper';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { ProductSetsService } from 'app/services/product-sets.service';
import { CloudStorageService } from 'app/services/cloud-storage.service';
import { MatListModule, MatStepperModule, MatTooltipModule, MatDialogModule } from '@angular/material';
import { GoogleCloudStorageHelper } from 'app/helpers/googleCloudStorageHelper';
import { FiltersModule } from './filters/filters.module';
import { FiltersComponent } from './filters/filters.component';
import { WebcamModule } from 'ngx-webcam';

const routes: Routes = [
    {
        path: ':productCategory/:productSetId',
        component: SimilarComponent
    },
    {
        path: '',
        component: SimilarComponent
    }
];

@NgModule({
    declarations: [
        SimilarComponent,
    ],
    imports: [
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
        MatProgressButtonsModule,
        MatListModule,
        MatStepperModule,
        MatTooltipModule,
        MatDialogModule,
        FiltersModule,
        WebcamModule
    ],
    providers: [
        SimilarService,
        ProductCategoryHelper,
        ProductSetsService,
        CloudStorageService,
        GoogleCloudStorageHelper
    ],
    entryComponents: [
        FiltersComponent
    ]
})
export class SimilarModule {
}
