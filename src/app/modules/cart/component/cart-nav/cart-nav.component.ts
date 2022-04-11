import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss']
})
export class CartNavComponent implements OnInit {
  selectedIndex = 1;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const url = this.router.url.split('/')[2];
    if(url === 'cart-detail'){
      this.selectedIndex = 1
    }else if(url === 'info-buy'){
      this.selectedIndex = 2
    }else if(url === 'order'){
      this.selectedIndex = 3
    }
  }

  setSelected(number: number) {
    this.selectedIndex = number;
  }
}
