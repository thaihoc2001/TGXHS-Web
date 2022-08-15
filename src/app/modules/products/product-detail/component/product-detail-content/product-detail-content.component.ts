import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail-content',
  templateUrl: './product-detail-content.component.html',
  styleUrls: ['./product-detail-content.component.scss']
})
export class ProductDetailContentComponent implements OnInit, AfterViewInit{
  @Input('productId') productId: string | null = '';
  @Input('productItem') productItem: any;
  @ViewChild('description', { read: ElementRef, static:false }) description: ElementRef;
  seeMoreDescriptionStatus = false;

  constructor() { }

  ngOnInit(): void {
    this.slideImage();
  }
  ngAfterViewInit(): void {
    this.productItem && console.log(this.description.nativeElement);
    if(this.productItem && this.description.nativeElement.height > 500){
      this.seeMoreDescriptionStatus = true;
    }else{
      this.seeMoreDescriptionStatus = false;
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
