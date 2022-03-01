import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {IohProductCategoryModel} from "../../../../share/model/categories/ioh-product-category.model";
import {ProductState} from "../../../../share/states/product/product.state";
import {MatPaginator} from "@angular/material/paginator";
import {tap} from "rxjs/operators";
import {NotifyService} from "../../../../share/service/notify/notify.service";

@Component({
  selector: 'app-summary-category',
  templateUrl: './summary-category.component.html',
  styleUrls: ['./summary-category.component.scss']
})
export class SummaryCategoryComponent implements OnInit {
  dataSource = new MatTableDataSource<IohProductCategoryModel>([]);
  displayedColumns: string[] = ['categoryId', 'categoryName', 'status', 'createAt', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private productState: ProductState,
              private notifyService: NotifyService) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void{
    this.productState.$listCategory.subscribe(res => this.productCategoryChange())
  }
  productCategoryChange(): void{
    const listCategory = this.productState.getProductCategory();
    if(listCategory){
      this.dataSource.data = listCategory
    }
  }

  deleteProductCategory(productCategory: IohProductCategoryModel) {
    this.productState.deleteCategory(productCategory.productCategoryId.toString())
      .pipe(tap(res => this.productState.getProductCategory()))
      .subscribe(res => this.notifyService.success('Xóa hãng thành công'),
                  error => this.notifyService.error('Xóa hãng thất bại'))
  }
}