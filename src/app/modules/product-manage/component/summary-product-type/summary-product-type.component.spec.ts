import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryProductTypeComponent } from './summary-product-type.component';

describe('SummaryProductTypeComponent', () => {
  let component: SummaryProductTypeComponent;
  let fixture: ComponentFixture<SummaryProductTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryProductTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
