import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {catchError, finalize, first, tap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {ProductService} from "../../service/product/product.service";
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {ProductTypeService} from "../../service/product-type/product-type.service";
import {IohProductCategoryModel} from "../../model/categories/ioh-product-category.model";
import {IohProductTypeModel} from "../../model/product-type/ioh-product-type.model";
import {IohProduct} from "../../model/product/ioh-product";
import {Parser} from "@angular/compiler";
import {IohProductDetail} from "../../model/product-detail/ioh-product-detail";
import {ProductDetailService} from "../../service/product-detail/product-detail.service";

@Injectable({
  providedIn: 'root'
})
export class ProductState implements OnDestroy {
  private lengthProduct = 9;
  private isReadySubject = new BehaviorSubject<boolean>(false);
  public isReady$ = this.isReadySubject.asObservable();

  private listProductSubject = new BehaviorSubject<IohProduct[]>([]);
  public $listProduct = this.listProductSubject.asObservable();

  private productSubject = new BehaviorSubject<IohProduct | null>(null);
  public $product = this.productSubject.asObservable();

  private countProductsSubject = new BehaviorSubject<number>(0);
  public $countProduct = this.countProductsSubject.asObservable();

  private productIdSubject = new BehaviorSubject<number>(0);
  public $productId = this.productIdSubject.asObservable();

  subscription: Subscription = new Subscription();

  constructor(private productService: ProductService,
              private productDetailService: ProductDetailService) {
    console.log(this.getCountNumber());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setIsReady(isReady: boolean): void {
    this.isReadySubject.next(isReady);
  }

  getIsReady(): boolean {
    return this.isReadySubject.getValue();
  }

  getCountNumber(): number {
    return this.countProductsSubject.getValue();
  }

  setCountNumber(count: number): void {
    this.countProductsSubject.next(count);
  }

  getListProductSubject(): IohProduct[] {
    return this.listProductSubject.getValue();
  }

  getProduct(): IohProduct | null {
    return this.productSubject.getValue();
  }

  setProduct(product: IohProduct): void {
    return this.productSubject.next(product);
  }

  setId(id: number): void {
    return this.productIdSubject.next(id);
  }

  getId(id: number): number {
    return this.productIdSubject.getValue();
  }

  setListProductSubject(product: IohProduct[]): void {
    return this.listProductSubject.next(product);
  }

  getAllProduct(count: number): void {
    const sb = this.productService.getProduct(count)
      .pipe(
        tap((listProduct: IohProduct[]) => {
          this.seeMoreProduct(listProduct);
          this.setCountNumber(count + listProduct.length);
        }),
        catchError(async (error) => console.log(error)),
        finalize(() => this.setIsReady(true))
      )
      .subscribe()
    this.subscription.add(sb);
  }

  getListProduct(count: number): void {
    const sb = this.productService.getProduct(count)
      .pipe(
        tap((listProduct: IohProduct[]) => {
          this.setListProductSubject(listProduct);
        }),
        catchError(async (error) => console.log(error)),
        finalize(() => this.setIsReady(true))
      )
      .subscribe()
    this.subscription.add(sb);
  }

  seeMoreProduct(listProduct: IohProduct[]): void {
    const list = this.getListProductSubject();
    list.push(...listProduct);
    this.setListProductSubject(list);
  }

  createProduct(product: IohProduct): Observable<IohProduct> {
    this.setIsReady(false);
    return this.productService.createProduct(product)
      .pipe(
        finalize(() => this.setIsReady(true))
      );
  }

  getProductById(id: number): void {
    const sb = this.productService.productById(id)
      .pipe(
        tap((product: IohProduct) => {
          console.log(product);
          this.setProduct(product)
        }),
        catchError(async (error) => console.log(error)),
        finalize(() => this.setIsReady(true))
      )
      .subscribe()
    this.subscription.add(sb);
  }

  deleteProduct(id: String): Observable<any> {
    return this.productService.deleteProduct(id)
      .pipe(
        finalize(() => this.setIsReady(true))
      )
  }

  createProductDetail(productDetail: IohProductDetail): Observable<IohProductDetail> {
    this.setIsReady(false);
    return this.productDetailService.createProductDetail(productDetail.toPlain())
      .pipe(
        finalize(() => this.setIsReady(true))
      );
  }
  getProductByCategory(categoryId: number, count: number): void {
    const sb = this.productService.getProductByCategory(categoryId, count)
      .pipe(
        tap((product: IohProduct[]) => {
          this.seeMoreProduct(product);
          this.setCountNumber(count + product.length);
        }),
        catchError(async (error) => console.log(error)),
        finalize(() => this.setIsReady(true))
      )
      .subscribe()
    this.subscription.add(sb);
  }
  getProductByType(typeId: number, count: number): void {
    const sb = this.productService.getProductByType(typeId, count)
      .pipe(
        tap((product: IohProduct[]) => {
          this.seeMoreProduct(product);
          this.setCountNumber(count + product.length);
        }),
        catchError(async (error) => console.log(error)),
        finalize(() => this.setIsReady(true))
      )
      .subscribe()
    this.subscription.add(sb);
  }
}
