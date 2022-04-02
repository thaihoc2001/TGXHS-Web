import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProduct} from "../../../../share/model/product/ioh-product";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {NotifyService} from "../../../../share/service/notify/notify.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit {
  dataSource = new MatTableDataSource<IohProduct>([]);
  displayedColumns: string[] = ['imageThumbnail', 'productName','quantity','action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private productState: ProductState,
              private notifyService: NotifyService) { }

  ngOnInit(): void {
    this.listenState();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // ngOnChanges() {
  //   const count = this.productState.getCountNumber();
  //   this.productState.getListProduct(count);
  // }
  listenState(): void{
    this.productState.$listProduct.subscribe(res => this.listProductChange())
  }

  listProductChange(): void{
    const listProduct = this.productState.getListProductSubject();
    if( listProduct ){
      this.dataSource.data = listProduct;
    }
  }

  deleteProduct(product: IohProduct): void{
    this.productState.deleteProduct(product.productId.toString())
      .pipe(tap(res => this.productState.getListProduct(0)))
      .subscribe(
        res => this.notifyService.success('Xóa sản phẩm thành công'),
        error => {
          console.log(error);
          this.notifyService.error('Xóa sản phẩm thất bại');
        }
      )

  }
}
