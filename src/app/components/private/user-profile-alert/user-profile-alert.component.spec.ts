import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileAlertComponent } from './user-profile-alert.component';

describe('UserProfileAlertComponent', () => {
  let component: UserProfileAlertComponent;
  let fixture: ComponentFixture<UserProfileAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileAlertComponent]
    });
    fixture = TestBed.createComponent(UserProfileAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
