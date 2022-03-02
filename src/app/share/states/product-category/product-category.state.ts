import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';
import {ProductCategoryService} from "../../service/product-category/product-category.service";
import {IohProductCategoryModel} from "../../model/categories/ioh-product-category.model";

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryState implements OnDestroy {

  private isReadySubject = new BehaviorSubject<boolean>(false);
  public isReady$ = this.isReadySubject.asObservable();

  private listCategorySubject = new BehaviorSubject<IohProductCategoryModel[]>([]);
  public $listCategory = this.listCategorySubject.asObservable();

  subscription: Subscription = new Subscription();

  constructor(private productCategoryService: ProductCategoryService) {
    this.getListProductCategory();
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

  getProductCategory(): IohProductCategoryModel[] {
    return this.listCategorySubject.getValue();
  }

  setProductCategory(categoryModel: IohProductCategoryModel[]): void {
    return this.listCategorySubject.next(categoryModel);
  }

  getListProductCategory(): void {
    const sb = this.productCategoryService.getProductCategory()
      .pipe(
        tap((listCategory: IohProductCategoryModel[]) => this.setProductCategory(listCategory)),
        catchError(async (error) => console.log(error)),
        finalize(() => this.setIsReady(true))
      )
      .subscribe()
    this.subscription.add(sb);
  }

  createProductCategory(productCategory: IohProductCategoryModel): Observable<IohProductCategoryModel>{
    this.setIsReady(false);
    return this.productCategoryService.createProductCategory(productCategory)
      .pipe(
        finalize(() => this.setIsReady(true))
      );
  }

  deleteCategory(id:String): Observable<any>{
    return this.productCategoryService.deleteProductCategory(id)
      .pipe(
        finalize(() => this.setIsReady(true))
      )
  }
}
