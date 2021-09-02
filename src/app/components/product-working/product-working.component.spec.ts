import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWorkingComponent } from './product-working.component';

describe('ProductWorkingComponent', () => {
  let component: ProductWorkingComponent;
  let fixture: ComponentFixture<ProductWorkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductWorkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
