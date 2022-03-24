import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-nav',
  templateUrl: './cart-nav.component.html',
  styleUrls: ['./cart-nav.component.scss']
})
export class CartNavComponent implements OnInit {
  selectedIndex = 1;
  constructor() { }

  ngOnInit(): void {
  }

  setSelected(number: number) {
    this.selectedIndex = number;
  }
}
