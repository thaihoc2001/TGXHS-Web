import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSaleHomeComponent } from './product-sale-home.component';

describe('ProductSaleHomeComponent', () => {
  let component: ProductSaleHomeComponent;
  let fixture: ComponentFixture<ProductSaleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSaleHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSaleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
