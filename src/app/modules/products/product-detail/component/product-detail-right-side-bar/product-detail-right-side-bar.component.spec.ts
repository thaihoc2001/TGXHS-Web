import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailRightSideBarComponent } from './product-detail-right-side-bar.component';

describe('ProductDetailRightSideBarComponent', () => {
  let component: ProductDetailRightSideBarComponent;
  let fixture: ComponentFixture<ProductDetailRightSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailRightSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailRightSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
