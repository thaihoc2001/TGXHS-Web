import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {IohProductCategoryModel} from "../../../../share/model/categories/ioh-product-category.model";
import {MatPaginator} from "@angular/material/paginator";
import {IohProductTypeModel} from "../../../../share/model/product-type/ioh-product-type.model";
import {ProductState} from "../../../../share/states/product/product.state";

@Component({
  selector: 'app-summary-product-type',
  templateUrl: './summary-product-type.component.html',
  styleUrls: ['./summary-product-type.component.scss']
})
export class SummaryProductTypeComponent implements OnInit {
  dataSource = new MatTableDataSource<IohProductTypeModel>([]);
  displayedColumns: string[] = ['productTypeId', 'productTypeName', 'status', 'createAt', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private productState: ProductState) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.listenState();
  }
  listenState(): void{
    this.productState.$listProductType.subscribe(res => this.productTypeChange())
  }
  productTypeChange(): void{
    const listproductType = this.productState.getProductType();
    if(listproductType){
      this.dataSource.data = listproductType
    }
  }
}
