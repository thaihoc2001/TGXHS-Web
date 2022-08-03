import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-product-detail-right-side-bar',
  templateUrl: './product-detail-right-side-bar.component.html',
  styleUrls: ['./product-detail-right-side-bar.component.scss']
})
export class ProductDetailRightSideBarComponent implements OnInit {
  @Input('productItem') productItem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
