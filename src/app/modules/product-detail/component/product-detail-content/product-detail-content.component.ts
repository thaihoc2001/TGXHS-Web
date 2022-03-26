import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductState} from "../../../../share/states/product/product.state";
import {IohProduct} from "../../../../share/model/product/ioh-product";

@Component({
  selector: 'app-product-detail-content',
  templateUrl: './product-detail-content.component.html',
  styleUrls: ['./product-detail-content.component.scss']
})
export class ProductDetailContentComponent implements OnInit {
  productId: string | null = '';
  productItem: any;

  constructor(private activatedRoute: ActivatedRoute,
              private productState: ProductState) { }

  ngOnInit(): void {
    this.getIdFormParams();
    this.listenState();
    this.slideImage();
  }
  listenState(): void{
    if(this.productId){
      this.productState.getProductById(parseInt(this.productId));
    }
    this.productState.$product.subscribe(res => this.listenProductDetail())
  }

  getIdFormParams(): void{
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = params.get('id');
      console.log(this.productId);
    });
  }

  listenProductDetail(): void{
    const product = this.productState.getProduct();
    if(product){
      this.productItem = product;
      console.log(this.productItem);
      console.log(this.productItem.productName);
    }
  }
  slideImage(): void{
    let thumbnails = document.getElementsByClassName('thumbnail')
    let activeImages = document.getElementsByClassName('active')
    for (var i=0; i < thumbnails.length; i++){

      thumbnails[i].addEventListener('mouseover', function(){
        if (activeImages.length > 0){
          activeImages[0].classList.remove('active')
        }
        // @ts-ignore
        this.classList.add('active')
        // @ts-ignore
        document.getElementById('featured').src = this.src
      })
    }
  }

  left(event: any): void{
    if (event.y > 0) document.getElementById('slider')!.scrollLeft -= 180;
    else document.getElementById('slider')!.scrollLeft += 180;
  }

  right(event: any): void{
    if (event.y > 0) document.getElementById('slider')!.scrollLeft += 180;
    else document.getElementById('slider')!.scrollLeft -= 180;
  }

  chooseImg(event: any): void{
    const urlImg = event.currentTarget.getAttribute("src");
    const mainImg = document.getElementById('featured');
    console.log(urlImg);
    // @ts-ignore
    mainImg.setAttribute("src", urlImg);
  }
}
