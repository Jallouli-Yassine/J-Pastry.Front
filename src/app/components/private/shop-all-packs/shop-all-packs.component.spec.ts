import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAllPacksComponent } from './shop-all-packs.component';

describe('ShopAllPacksComponent', () => {
  let component: ShopAllPacksComponent;
  let fixture: ComponentFixture<ShopAllPacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopAllPacksComponent]
    });
    fixture = TestBed.createComponent(ShopAllPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
