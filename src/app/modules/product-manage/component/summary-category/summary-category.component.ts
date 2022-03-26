import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {IohProductCategoryModel} from "../../../../share/model/categories/ioh-product-category.model";
import {ProductState} from "../../../../share/states/product/product.state";
import {MatPaginator} from "@angular/material/paginator";
import {tap} from "rxjs/operators";
import {NotifyService} from "../../../../share/service/notify/notify.service";
import {ProductCategoryState} from "../../../../share/states/product-category/product-category.state";

@Component({
  selector: 'app-summary-category',
  templateUrl: './summary-category.component.html',
  styleUrls: ['./summary-category.component.scss']
})
export class SummaryCategoryComponent implements OnInit {
  dataSource = new MatTableDataSource<IohProductCategoryModel>([]);
  displayedColumns: string[] = ['categoryId', 'categoryName', 'createAt', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private productCategoryState: ProductCategoryState,
              private notifyService: NotifyService) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void{
    this.productCategoryState.$listCategory.subscribe(res => this.productCategoryChange())
  }
  productCategoryChange(): void{
    const listCategory = this.productCategoryState.getProductCategory();
    if(listCategory){
      this.dataSource.data = listCategory
    }
  }

  deleteProductCategory(productCategory: IohProductCategoryModel) {
    this.productCategoryState.deleteCategory(productCategory.productCategoryId.toString())
      .pipe(tap(res => this.productCategoryState.getProductCategory()))
      .subscribe(res => this.notifyService.success('Xóa hãng thành công'),
                  error => this.notifyService.error('Xóa hãng thất bại'))
  }
}
