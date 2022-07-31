import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterPurchaseServiceComponent } from './after-purchase-service.component';

describe('AfterPurchaseServiceComponent', () => {
  let component: AfterPurchaseServiceComponent;
  let fixture: ComponentFixture<AfterPurchaseServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterPurchaseServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterPurchaseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
