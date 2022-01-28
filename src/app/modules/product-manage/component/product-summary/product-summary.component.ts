import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateProductModalComponent} from "../create-product-modal/create-product-modal.component";

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.scss']
})
export class ProductSummaryComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModalCreateProduct() {
    const modalRef = this.modalService.open(CreateProductModalComponent, {size: 'xl', backdrop: 'static'});
  }
}
