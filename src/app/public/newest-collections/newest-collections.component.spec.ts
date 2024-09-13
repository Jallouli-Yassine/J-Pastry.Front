import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestCollectionsComponent } from './newest-collections.component';

describe('NewestCollectionsComponent', () => {
  let component: NewestCollectionsComponent;
  let fixture: ComponentFixture<NewestCollectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewestCollectionsComponent]
    });
    fixture = TestBed.createComponent(NewestCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
