import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProductCategoryModel} from "../../../../share/model/categories/ioh-product-category.model";
import {tap} from "rxjs/operators";
import {NotifyService} from "../../../../share/service/notify/notify.service";
import {ProductCategoryState} from "../../../../share/states/product-category/product-category.state";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  productForm: any;

  constructor(private formBuilder: FormBuilder,
              private productCategoryState: ProductCategoryState,
              private notifyService: NotifyService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.productForm = this.formBuilder.group({
      productCategoryName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    })
  }

  submit(): void{
    const iohProductCategoryModel = new IohProductCategoryModel();
    this.createCategory(iohProductCategoryModel);
  }
  createCategory(iohProductCategoryModel: IohProductCategoryModel){
    iohProductCategoryModel.productCategoryName = this.productForm.get('productCategoryName').value;
    iohProductCategoryModel.status = this.productForm.get('status').value;
    iohProductCategoryModel.description = this.productForm.get('description').value;
    this.productCategoryState.createProductCategory(iohProductCategoryModel.toPlain())
      .pipe(tap(res => this.productCategoryState.getListProductCategory()))
      .subscribe(res => {
        this.notifyService.success('Tạo hãng xe thành công');
      },
        error => {
        this.notifyService.error('Tạo hãng xe thất bại');
        })
  }

  isControlValid(formGroup: FormGroup, controlName: string): boolean {
    const control = formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(formGroup: FormGroup, controlName: string): boolean {
    const control = formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(formGroup: FormGroup, validation: any, controlName: any): boolean {
    const control = formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(formGroup: FormGroup, controlName: any): boolean {
    const control = formGroup.controls[controlName];
    return control.dirty || control.touched;
  }
}
