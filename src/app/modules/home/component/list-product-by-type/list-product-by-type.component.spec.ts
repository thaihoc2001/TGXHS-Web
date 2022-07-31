import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductByTypeComponent } from './list-product-by-type.component';

describe('ListProductByTypeComponent', () => {
  let component: ListProductByTypeComponent;
  let fixture: ComponentFixture<ListProductByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductByTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
