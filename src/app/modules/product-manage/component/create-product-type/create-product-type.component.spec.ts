import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductTypeComponent } from './create-product-type.component';

describe('CreateProductTypeComponent', () => {
  let component: CreateProductTypeComponent;
  let fixture: ComponentFixture<CreateProductTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
