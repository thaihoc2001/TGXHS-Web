import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceCategoryComponent } from './introduce-category.component';

describe('IntroduceCategoryComponent', () => {
  let component: IntroduceCategoryComponent;
  let fixture: ComponentFixture<IntroduceCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduceCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
