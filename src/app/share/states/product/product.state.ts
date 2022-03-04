import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {ProductService} from "../../service/product/product.service";
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {ProductTypeService} from "../../service/product-type/product-type.service";
import {IohProductCategoryModel} from "../../model/categories/ioh-product-category.model";
import {IohProductTypeModel} from "../../model/product-type/ioh-product-type.model";
import {IohProduct} from "../../model/product/ioh-product";
import {Parser} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class ProductState implements OnDestroy {

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

  constructor(private productService: ProductService) {
    this.getListProduct(this.countProductsSubject.getValue())
    this.getProductById(this.productIdSubject.getValue());
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
  getCountNumber(): number{
    return this.countProductsSubject.getValue();
  }
  setCountNumber(count: number): void{
    this.countProductsSubject.next(count);
  }

  getListProductSubject(): IohProduct[] {
    return this.listProductSubject.getValue();
  }

  getProduct(): IohProduct | null{
    return this.productSubject.getValue();
  }

  setProduct(product:IohProduct): void{
    return this.productSubject.next(product);
  }
  setId(id:number): void{
    return this.productIdSubject.next(id);
  }
  getId(id:number): number{
    return this.productIdSubject.getValue();
  }

  setListProductSubject(product: IohProduct[]): void {
    return this.listProductSubject.next(product);
  }
  defaultCountProductMore(count: number): void{
    this.setCountNumber(count);
    this.getListProduct(this.getCountNumber());
  }
  getProductId(id: number): void{
    this.setId(id);
    this.getProductById(this.productIdSubject.getValue());
  }

  getListProduct(count: number): void {
    const sb = this.productService.getProduct(count)
      .pipe(
        tap((listProduct: IohProduct[]) => this.setListProductSubject(listProduct)),
        catchError(async (error) => console.log(error)),
        finalize(() => this.setIsReady(true))
      )
      .subscribe()
    this.subscription.add(sb);
  }

  createProduct(product: IohProduct): Observable<IohProduct>{
    this.setIsReady(false);
    return this.productService.createProduct(product)
      .pipe(
        finalize(() => this.setIsReady(true))
      );
  }

  getProductById(id: number): void{
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

  deleteProduct(id:String): Observable<any>{
    return this.productService.deleteProduct(id)
      .pipe(
        finalize(() => this.setIsReady(true))
      )
  }
}
