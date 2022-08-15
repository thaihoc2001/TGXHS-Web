import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {ActivatedRoute} from "@angular/router";
import {IohProduct} from "../../../../../share/model/product/ioh-product";


@Component({
  selector: 'app-product-detail-by-category',
  templateUrl: './product-detail-by-category.component.html',
  styleUrls: ['./product-detail-by-category.component.scss']
})
export class ProductDetailByCategoryComponent implements OnInit {
  @Input('listProductByCategory') listProductByCategory: IohProduct[] = [];
  innerWidth: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    autoWidth: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1.5
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
