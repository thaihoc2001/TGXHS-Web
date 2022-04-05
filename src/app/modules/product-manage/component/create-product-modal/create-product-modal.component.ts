import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from "@angular/forms";
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProductCategoryModel} from "../../../../share/model/categories/ioh-product-category.model";
import {IohProductTypeModel} from "../../../../share/model/product-type/ioh-product-type.model";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {NotifyService} from "../../../../share/service/notify/notify.service";
import {switchMap, tap} from "rxjs/operators";
import {ProductTypeState} from "../../../../share/states/product-type/product-type.state";
import {ProductCategoryState} from "../../../../share/states/product-category/product-category.state";
import { UploadAdapter } from 'src/app/share/Upload/UploadAdapter';
import {IohProductDetail} from "../../../../share/model/product-detail/ioh-product-detail";
import {Observable} from "rxjs";
import {IohProduct} from "../../../../share/model/product/ioh-product";
// import {ClassicImageResize} from "@emagtechlabs/ckeditor5-classic-image-resize";

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
  productDetailForm: any;
  pageNumber = 2;

  constructor(private formBuilder: FormBuilder,
              private productState: ProductState,
              private productTypeState: ProductTypeState,
              private productCategoryState: ProductCategoryState,
              private notifyService: NotifyService) { }

  ngOnInit(): void {
    this.listenState();
    this.initFormProduct();
    this.initFormProductDetail();
    this.changePageCreate(this.pageNumber);
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
  // Handel product detail
  initFormProductDetail(): void{
    this.productDetailForm = this.formBuilder.group({
      brake: new FormControl(''),
      rim: new FormControl(''),
      battery: new FormControl(''),
      capacity: new FormControl(''),
      power: new FormControl(''),
      dimension: new FormControl(''),
      range: new FormControl(''),
      charging: new FormControl(''),
      weight: new FormControl('')
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
      .pipe(
        switchMap((res: IohProduct) => {
          const productDetail = new IohProductDetail();
          return this.createProductDetail(productDetail, res.productId);
        }),
        tap(res => this.productState.getListProduct(0))
      )
      .subscribe(
      res => {
        this.notifyService.success('Tạo sản phẩm thành công')
        // this.initFormProduct();
        // this.initFormProductDetail();
      },
      error => {
        this.notifyService.error('Tạo sản phẩm thất bại')
        console.log(error);
      }
    )
    console.log(this.productForm.getRawValue())
  }
  createProductDetail(productDetail:IohProductDetail, productId: number): Observable<IohProductDetail>{
    console.log(productId);
    productDetail.productId = productId;
    productDetail.brake = this.productDetailForm.get('brake').value;
    productDetail.rim = this.productDetailForm.get('rim').value;
    productDetail.battery = this.productDetailForm.get('battery').value;
    productDetail.capacity = this.productDetailForm.get('capacity').value;
    productDetail.charging = this.productDetailForm.get('charging').value;
    productDetail.dimension = this.productDetailForm.get('dimension').value;
    productDetail.power = this.productDetailForm.get('power').value;
    productDetail.range = this.productDetailForm.get('range').value;
    productDetail.weight = this.productDetailForm.get('weight').value;
    console.log(productDetail);
    return this.productState.createProductDetail(productDetail);
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
      toolbar: [
        'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
        '|',
        'imageStyle:full',
        'imageStyle:side',
        '|',
        'imageTextAlternative'
      ],
      styles: [
        'full',
        'side',
        'alignLeft', 'alignCenter', 'alignRight'
      ],
      resizeOptions: [
        {
          name: 'imageResize:original',
          label: 'Original',
          value: null
        },
        {
          name: 'imageResize:50',
          label: '50%',
          value: '50'
        },
        {
          name: 'imageResize:75',
          label: '75%',
          value: '75'
        }
      ],
    },
  };
  onReady(eventData: any) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function(loader: any) {
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }

  changePageCreate(number: number) {
    const productFormId = document.getElementById('form-create-product');
    const productDetailFormId = document.getElementById('form-create-product-detail');
    this.pageNumber = number;
    console.log(this.pageNumber)
    if(this.pageNumber === 1){
      // @ts-ignore
      productFormId.classList.add('d-none');
      // @ts-ignore
      productDetailFormId.classList.remove('d-none');
    }else{
      // @ts-ignore
      productDetailFormId.classList.add('d-none');
      // @ts-ignore
      productFormId.classList.remove('d-none');
    }
  }


}
