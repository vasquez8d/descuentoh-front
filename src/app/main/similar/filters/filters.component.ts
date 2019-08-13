import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'filters',
    templateUrl: 'filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

    public formUser: FormGroup;
    public showImage = false;
    public boundingPolys = [];

    productImagesReference = [];

    constructor(
        public dialogRef: MatDialogRef<FiltersComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private formBuilder: FormBuilder
    ) {
        this.productImagesReference = data.products;
    }

    ngOnInit(): void {
        this.formUser = this.formBuilder.group({
            imageName: [''],
            imageBase64: [''],
            bucketName: ['']
        });
    }

}
