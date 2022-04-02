import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';
import {ProductService} from "../../service/product/product.service";
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {ProductTypeService} from "../../service/product-type/product-type.service";
import {IohProductCategoryModel} from "../../model/categories/ioh-product-category.model";
import {IohProductTypeModel} from "../../model/product-type/ioh-product-type.model";
import {IohProduct} from "../../model/product/ioh-product";
import {IohTypeCategoriesProduct} from "../../model/product-type/ioh-type-categories-product";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeState implements OnDestroy {

  private isReadySubject = new BehaviorSubject<boolean>(false);
  public isReady$ = this.isReadySubject.asObservable();

  private listProductTypeSubject = new BehaviorSubject<IohProductTypeModel[]>([]);
  public $listProductType = this.listProductTypeSubject.asObservable();

  private listProductTypeAndCategoriesSubject = new BehaviorSubject<IohTypeCategoriesProduct[]>([]);
  public $listProductTypeAndCategories = this.listProductTypeAndCategoriesSubject.asObservable();


  subscription: Subscription = new Subscription();

  constructor(private productTypeService: ProductTypeService) {
    this.getListProductType();
    // this.getCategoryByProductType();
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
  getProductType(): IohProductTypeModel[] {
    return this.listProductTypeSubject.getValue();
  }
  setProductType(productType: IohProductTypeModel[]): void {
    return this.listProductTypeSubject.next(productType);
  }
  getProductTypeAndCategories(): IohTypeCategoriesProduct[] {
    return this.listProductTypeAndCategoriesSubject.getValue();
  }
  setProductTypeAndCategories(iohTypeCategoriesProducts: IohTypeCategoriesProduct[]): void {
    return this.listProductTypeAndCategoriesSubject.next(iohTypeCategoriesProducts);
  }
  getListProductType(): void {
    const sb = this.productTypeService.getProductType()
      .pipe(
        tap((listProductType: IohProductTypeModel[]) => this.setProductType(listProductType)),
        catchError(async (error) => console.log(error)),
        finalize(() => this.setIsReady(true))
      )
      .subscribe()
    this.subscription.add(sb);
  }
  createProductType(ProductType: IohProductTypeModel): Observable<IohProductTypeModel>{
    this.setIsReady(false);
    return this.productTypeService.createProductType(ProductType)
      .pipe(
        finalize(() => this.setIsReady(true))
      );
  }
  deleteProductType(id: String): Observable<any>{
    return this.productTypeService.deleteProductType(id)
      .pipe(
        finalize(() => this.setIsReady(true))
      )
  }
  // getCategoryByProductType(): void{
  //   const sb = this.productTypeService.getProductTypebyCategory()
  //     .pipe(
  //       tap((iohTypeCategoriesProducts: IohTypeCategoriesProduct[]) => {
  //         console.log(iohTypeCategoriesProducts);
  //         this.setProductTypeAndCategories(iohTypeCategoriesProducts);
  //       }),
  //       catchError(async (error) => console.log(error)),
  //       finalize(() => this.setIsReady(true))
  //     )
  //     .subscribe()
  //   this.subscription.add(sb);
  // }
}
