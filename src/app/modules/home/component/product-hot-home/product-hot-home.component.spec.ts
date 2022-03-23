import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHotHomeComponent } from './product-hot-home.component';

describe('ProductHotHomeComponent', () => {
  let component: ProductHotHomeComponent;
  let fixture: ComponentFixture<ProductHotHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHotHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHotHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
