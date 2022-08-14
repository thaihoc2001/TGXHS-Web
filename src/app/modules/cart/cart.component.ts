import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../share/service/token-storage/token-storage.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
