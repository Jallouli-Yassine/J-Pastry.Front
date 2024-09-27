import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  addUserForm!: FormGroup;


  constructor(private fb: FormBuilder, private authService: AuthService, private r: Router) {
    let formControls = {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]*"),
        Validators.minLength(3)
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      tel: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{8,15}$') // Phone number validation pattern
      ])
    }

    this.addUserForm = this.fb.group(formControls);
  }

  get telUser() { return this.addUserForm.get('tel'); }
  get nomUser() { return this.addUserForm.get('name'); }
  get emailUser() { return this.addUserForm.get('email'); }
  get passwordUser() { return this.addUserForm.get('password'); }
  get confPassUser() { return this.addUserForm.get('passwordConfirm'); }
  get roleUser() { return this.addUserForm.get('role'); }
  get genderUser() { return this.addUserForm.get('gender'); }

  save() {
    if (this.addUserForm.valid) {
      console.log(this.addUserForm.value);
      this.authService.signup(this.addUserForm.value).subscribe(
        response => {
          console.log(response);
          //this.r.navigate();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
