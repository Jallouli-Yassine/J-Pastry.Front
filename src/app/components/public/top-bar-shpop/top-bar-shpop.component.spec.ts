import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarShpopComponent } from './top-bar-shpop.component';

describe('TopBarShpopComponent', () => {
  let component: TopBarShpopComponent;
  let fixture: ComponentFixture<TopBarShpopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopBarShpopComponent]
    });
    fixture = TestBed.createComponent(TopBarShpopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
