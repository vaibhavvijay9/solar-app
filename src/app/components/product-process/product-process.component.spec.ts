import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductProcessComponent } from './product-process.component';

describe('ProductProcessComponent', () => {
  let component: ProductProcessComponent;
  let fixture: ComponentFixture<ProductProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
