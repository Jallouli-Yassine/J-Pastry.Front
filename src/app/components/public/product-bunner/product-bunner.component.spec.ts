import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBunnerComponent } from './product-bunner.component';

describe('ProductBunnerComponent', () => {
  let component: ProductBunnerComponent;
  let fixture: ComponentFixture<ProductBunnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductBunnerComponent]
    });
    fixture = TestBed.createComponent(ProductBunnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
