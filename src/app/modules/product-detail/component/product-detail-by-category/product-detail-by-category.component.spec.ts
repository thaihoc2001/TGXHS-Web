import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailByCategoryComponent } from './product-detail-by-category.component';

describe('ProductDetailByCategoryComponent', () => {
  let component: ProductDetailByCategoryComponent;
  let fixture: ComponentFixture<ProductDetailByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
