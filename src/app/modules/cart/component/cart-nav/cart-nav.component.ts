import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss']
})
export class CartNavComponent implements OnInit {
  selectedIndex = 1;
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      const url = this.router.url.split('/')[2];
      if(url === 'cart-detail'){
        this.selectedIndex = 1
      }else if(url === 'info-buy'){
        this.selectedIndex = 2
      }else if(url === 'order'){
        this.selectedIndex = 3
      }else{
        this.selectedIndex = 4
      }
    });
  }

  ngOnInit(): void {
  }

  setSelected(number: number) {
    this.selectedIndex = number;
  }
}
