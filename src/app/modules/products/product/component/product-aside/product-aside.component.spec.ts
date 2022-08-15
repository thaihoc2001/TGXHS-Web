import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAsideComponent } from './product-aside.component';

describe('ProductAsideComponent', () => {
  let component: ProductAsideComponent;
  let fixture: ComponentFixture<ProductAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
