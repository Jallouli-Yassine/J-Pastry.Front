import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFormPassForgetComponent } from './email-form-pass-forget.component';

describe('EmailFormPassForgetComponent', () => {
  let component: EmailFormPassForgetComponent;
  let fixture: ComponentFixture<EmailFormPassForgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailFormPassForgetComponent]
    });
    fixture = TestBed.createComponent(EmailFormPassForgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
