import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProduct} from "../../../../share/model/product/ioh-product";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit {
  dataSource = new MatTableDataSource<IohProduct>([]);
  displayedColumns: string[] = ['productId', 'imageThumbnail', 'productName', 'priceNew', 'quantity', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private productState: ProductState) { }

  ngOnInit(): void {
    this.listenState();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  listenState(): void{
    this.productState.$listProduct.subscribe(res => this.listProductChange())
  }

  listProductChange(): void{
    const listProduct = this.productState.getListProductSubject();
    if( listProduct ){
      this.dataSource.data = listProduct;
    }
  }
}
