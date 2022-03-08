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

  private isBtn = new BehaviorSubject<boolean>(true);
  public $isBtn = this.isBtn.asObservable();
  private productSubject = new BehaviorSubject<IohProduct | null>(null);
  public $product = this.productSubject.asObservable();

  private countProductsSubject = new BehaviorSubject<number>(0);
  public $countProduct = this.countProductsSubject.asObservable();

  private productIdSubject = new BehaviorSubject<number>(0);
  public $productId = this.productIdSubject.asObservable();

  subscription: Subscription = new Subscription();

  constructor(private productService: ProductService) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setIsBtn(value: boolean): void{
    this.isBtn.next(value);
  }
  getIsBtn(): boolean{
    return this.isBtn.getValue();
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

  setListProductSubject(product: IohProduct[]): void{
    return this.listProductSubject.next(product);
  }

  defaultCountProductMore(count: number): void{
    this.setCountNumber(count);
    this.getListProduct(this.getCountNumber());
  }
  getListProduct(count: number): void{
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
  getListProductOfCategory(category_id: any, count: any): void{
    const sb = this.productService.getProductsByCategory(category_id,count)
      .pipe(
        tap((products: IohProduct[]) => {
          if (products.length === 0){
            this.setIsBtn(false);
          }
          this.addProducts(products);
          const count = this.getCountNumber();
          this.setCountNumber((count+products.length));
        }),
        catchError(async (error) => console.log(error)),
        finalize(() => this.setIsReady(true))
      )
      .subscribe()
    this.subscription.add(sb);
  }
  getListProductOfType(type_id: any, count: any): void{
    const sb = this.productService.getProductsByType(type_id, count)
      .pipe(
        tap((products: IohProduct[]) => {
          if (products.length === 0){
            this.setIsBtn(false);
          }
          this.addProducts(products);
          const count = this.getCountNumber();
          this.setCountNumber((count+products.length));
        }),
        catchError(async (err) => console.log(err)),
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
  addProducts(products: IohProduct[]): void{
    const list = this.getListProductSubject();
    list.push(...products);
    this.setListProductSubject(list);
  }
}
