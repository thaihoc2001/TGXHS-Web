import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductState} from "../../../../share/states/product/product.state";
import {NotifyService} from "../../../../share/service/notify/notify.service";
import {tap} from "rxjs/operators";
import {IohProductTypeModel} from "../../../../share/model/product-type/ioh-product-type.model";
import {ProductTypeState} from "../../../../share/states/product-type/product-type.state";

@Component({
  selector: 'app-create-product-type',
  templateUrl: './create-product-type.component.html',
  styleUrls: ['./create-product-type.component.scss']
})
export class CreateProductTypeComponent implements OnInit {
  productTypeForm: any;

  constructor(private formBuilder: FormBuilder,
              private productTypeState: ProductTypeState,
              private notifyService: NotifyService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.productTypeForm = this.formBuilder.group({
      productTypeName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    })
  }

  submit(): void {
    const iohProductTypeModel = new IohProductTypeModel();
    this.createProductType(iohProductTypeModel);
  }

  createProductType(iohProductTypeModel: IohProductTypeModel): void {
    iohProductTypeModel.productTypeName = this.productTypeForm.get('productTypeName').value;
    iohProductTypeModel.status = this.productTypeForm.get('status').value;
    iohProductTypeModel.description = this.productTypeForm.get('description').value;
    this.productTypeState.createProductType(iohProductTypeModel.toPlain())
      .pipe(tap(res => this.productTypeState.getListProductType()))
      .subscribe(
        res => {
          this.notifyService.success('Tạo loại sản phẩm thành công');
        },
        error => {
          this.notifyService.error('Tạo loại sản phẩm thất bại');
        }
      )
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
