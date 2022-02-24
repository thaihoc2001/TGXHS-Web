import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManageNavComponent } from './product-manage-nav.component';

describe('ProductManageNavComponent', () => {
  let component: ProductManageNavComponent;
  let fixture: ComponentFixture<ProductManageNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductManageNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
