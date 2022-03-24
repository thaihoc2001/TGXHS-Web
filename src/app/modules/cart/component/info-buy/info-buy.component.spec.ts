import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBuyComponent } from './info-buy.component';

describe('InfoBuyComponent', () => {
  let component: InfoBuyComponent;
  let fixture: ComponentFixture<InfoBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
