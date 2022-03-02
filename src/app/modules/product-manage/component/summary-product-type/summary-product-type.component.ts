import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {IohProductCategoryModel} from "../../../../share/model/categories/ioh-product-category.model";
import {MatPaginator} from "@angular/material/paginator";
import {IohProductTypeModel} from "../../../../share/model/product-type/ioh-product-type.model";
import {ProductState} from "../../../../share/states/product/product.state";
import {tap} from "rxjs/operators";
import {NotifyService} from "../../../../share/service/notify/notify.service";
import {ProductTypeState} from "../../../../share/states/product-type/product-type.state";

@Component({
  selector: 'app-summary-product-type',
  templateUrl: './summary-product-type.component.html',
  styleUrls: ['./summary-product-type.component.scss']
})
export class SummaryProductTypeComponent implements OnInit {
  dataSource = new MatTableDataSource<IohProductTypeModel>([]);
  displayedColumns: string[] = ['productTypeId', 'productTypeName', 'status', 'createAt', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private productTypeState: ProductTypeState,
              private notifyService: NotifyService) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void{
    this.productTypeState.$listProductType.subscribe(res => this.productTypeChange())
  }
  productTypeChange(): void{
    const listproductType = this.productTypeState.getProductType();
    if(listproductType){
      this.dataSource.data = listproductType
    }
  }

  deleteProduct(productType: IohProductTypeModel) {
    this.productTypeState.deleteProductType(productType.productTypeId.toString())
      .pipe(tap(res => this.productTypeState.getListProductType()))
      .subscribe(
        res => this.notifyService.success('Xóa loại sản phẩm thành công'),
        error => this.notifyService.error('Xóa loại sản phẩm thất bại')
      )
  }
}
