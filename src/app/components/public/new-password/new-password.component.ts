import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {
  newPasswordForm: FormGroup;
  message: string | undefined;
  token: string | null | undefined;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.newPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      code: ['', [Validators.required]]
    }, {
      validators: this.passwordsMatch
    });
  }

  ngOnInit(): void {
    // Get the token from the URL
    this.token = this.route.snapshot.queryParamMap.get('token');
  }

  passwordsMatch(formGroup: FormGroup) {
    const { newPassword, confirmPassword } = formGroup.value;
    return newPassword === confirmPassword ? null : { passwordsNotMatch: true };
  }

  onSubmit() {
    if (this.newPasswordForm.invalid) return;

    const { newPassword, code } = this.newPasswordForm.value;
    this.authService.resetPassword(this.token, newPassword, code).subscribe(
      (response) => {
        alert('Password successfully reset. Please log in with your new password.');
      },
      (error) => {
        this.message = 'Error resetting password. Please try again.';
      }
    );
  }
}
