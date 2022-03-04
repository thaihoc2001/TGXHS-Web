import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormGroup, Validators, FormControl, FormBuilder} from "@angular/forms";
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProductCategoryModel} from "../../../../share/model/categories/ioh-product-category.model";
import {IohProductTypeModel} from "../../../../share/model/product-type/ioh-product-type.model";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {BigInteger} from "@angular/compiler/src/i18n/big_integer";
import {NotifyService} from "../../../../share/service/notify/notify.service";
import {tap} from "rxjs/operators";
import {ProductTypeState} from "../../../../share/states/product-type/product-type.state";
import {ProductCategoryState} from "../../../../share/states/product-category/product-category.state";

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.scss']
})
export class CreateProductModalComponent implements OnInit {
  productForm: any;
  listProductCategory: IohProductCategoryModel[] = [];
  listProductType: IohProductTypeModel[] = [];
  listFileImage: any = [];
  Editor = ClassicEditor;

  constructor(private formBuilder: FormBuilder,
              private productState: ProductState,
              private productTypeState: ProductTypeState,
              private productCategoryState: ProductCategoryState,
              private notifyService: NotifyService) { }

  ngOnInit(): void {
    this.listenState();
    this.initFormProduct();
  }
  listenState(): void{
    this.productCategoryState.$listCategory.subscribe(res => this.listCategoryChange())
    this.productTypeState.$listProductType.subscribe(res => this.listProductTypeChange())
  }
  listCategoryChange(): void{
    const listCategory = this.productCategoryState.getProductCategory();
    if(listCategory){
      this.listProductCategory = listCategory;
      console.log(this.listProductCategory);
    }
  }
  listProductTypeChange(): void{
    const listProductType = this.productTypeState.getProductType();
    if(listProductType){
      this.listProductType = listProductType;
      console.log(this.listProductType);
    }
  }

  onFileSelected(event: any, fileName: String): void{
    const file = (event.target.files[0] as File);
    this.productForm.get(fileName).setValue(file);
  }

  initFormProduct(): void{
    this.productForm = this.formBuilder.group({
      productName: new FormControl('', Validators.required),
      priceOld: new FormControl('', Validators.required),
      priceNew: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      imageThumbnailSource: new FormControl(null, Validators.required),
      imageThumbnail: [null],
      productCategory: new FormControl('', Validators.required),
      productType: new FormControl('', Validators.required),
      imageSource1: new FormControl(null, Validators.required),
      imageSource2: new FormControl(null, Validators.required),
      imageSource3: new FormControl(null, Validators.required),
      imageSource4: new FormControl(null, Validators.required),
      imageSource5: new FormControl(null, Validators.required),
      imageSource6: new FormControl(null, Validators.required),
      image1: [null],
      image2: [null],
      image3: [null],
      image4: [null],
      image5: [null],
      image6: [null],
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
  pushToListImage(): void{
    this.listFileImage.push(this.productForm.get('image1').value);
    this.listFileImage.push(this.productForm.get('image2').value);
    this.listFileImage.push(this.productForm.get('image3').value);
    this.listFileImage.push(this.productForm.get('image4').value);
    this.listFileImage.push(this.productForm.get('image5').value);
    this.listFileImage.push(this.productForm.get('image6').value);
  }
  submit(): void{
    this.pushToListImage();
    const fd: any  = new FormData();
    fd.append('name',this.productForm.get('productName').value);
    fd.append('price_old', parseInt(this.productForm.get('priceOld').value));
    fd.append('price_new', parseInt(this.productForm.get('priceNew').value));
    fd.append('description', this.productForm.get('description').value);
    fd.append('image_thumbnail', this.productForm.get('imageThumbnail').value);
    fd.append('category_id', parseInt(this.productForm.get('productCategory').value.productCategoryId));
    fd.append('product_type_id', parseInt(this.productForm.get('productType').value.productTypeId));
    fd.append('status', this.productForm.get('status').value);
    fd.append('quantity', parseInt(this.productForm.get('quantity').value));
    fd.append('images', this.productForm.get('image1').value);
    fd.append('images', this.productForm.get('image2').value);
    fd.append('images', this.productForm.get('image3').value);
    fd.append('images', this.productForm.get('image4').value);
    fd.append('images', this.productForm.get('image5').value);
    fd.append('images', this.productForm.get('image6').value);
    console.log(this.listFileImage);

    this.productState.createProduct(fd)
      .pipe(tap(res => this.productState.getListProduct(0)))
      .subscribe(
      res => {
        this.notifyService.success('Tạo sản phẩm thành công')
        this.initFormProduct();
      },
      error => {
        this.notifyService.error('Tạo sản phẩm thất bại')
      }
    )
    console.log(this.productForm.getRawValue())
  }
  @Input() config = {
    toolbar: {
      items: [
        'heading', '|',
        'fontfamily', 'fontsize',
        'alignment',
        'fontColor', 'fontBackgroundColor', '|',
        'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
        'link', '|',
        'outdent', 'indent', '|',
        'bulletedList', '-', 'numberedList', 'todoList', '|',
        'code', 'codeBlock', '|',
        'insertTable', '|',
        'imageUpload', 'blockQuote', '|',
        'todoList'
        ,
        'undo', 'redo',
      ],
      shouldNotGroupWhenFull: true,

    },
    image: {
      // Configure the available styles.
      styles: [
        'alignLeft', 'alignCenter', 'alignRight'
      ],

      // Configure the available image resize options.
      resizeOptions: [
        {
          name: 'resizeImage:original',
          label: 'Original',
          value: null
        },
        {
          name: 'resizeImage:50',
          label: '25%',
          value: '25'
        },
        {
          name: 'resizeImage:50',
          label: '50%',
          value: '50'
        },
        {
          name: 'resizeImage:75',
          label: '75%',
          value: '75'
        }
      ],

      // You need to configure the image toolbar, too, so it shows the new style
      // buttons as well as the resize buttons.
      toolbar: [
        'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
        '|',
        'ImageResize',
        '|',
        'imageTextAlternative'
      ]
    },
    // simpleUpload: {
    //    The URL that the images are uploaded to.
    // uploadUrl: 'http://localhost:52536/api/Image/ImageUpload',

    //   Enable the XMLHttpRequest.withCredentials property.

    //},

    language: 'en'
  };

}
