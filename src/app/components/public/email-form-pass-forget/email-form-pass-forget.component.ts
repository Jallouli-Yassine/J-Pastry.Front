import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-email-form-pass-forget',
  templateUrl: './email-form-pass-forget.component.html',
  styleUrls: ['./email-form-pass-forget.component.css'],
})
export class EmailFormPassForgetComponent {
  forgotPasswordForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.get('email')?.value;
      this.authService.forgotPassword(email).subscribe({
        next: () => {
          alert('Password reset link has been sent to your email');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.errorMessage = 'Failed to send reset link. Please try again.';
        },
      });
    }
  }
}
