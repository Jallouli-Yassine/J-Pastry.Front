import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credForm!: FormGroup;


  constructor(private fb: FormBuilder, private authService: AuthService, private r: Router) {
    this.credForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Add email validator as well
      password: ['', Validators.required]
    });
    
    // console.log(this.addFoyerForm);

  }
  get email() { return this.credForm.get('email'); }
  get password() { return this.credForm.get('password'); }

  login() {
    this.authService.login(this.credForm.value).subscribe({
      next: (response) => {
        console.log('User logged in:', response);
        this.r.navigate(['/shop']);
      },
      error: (error) => {
        console.error('Error during login:', error);
      }
    });
  }
}
