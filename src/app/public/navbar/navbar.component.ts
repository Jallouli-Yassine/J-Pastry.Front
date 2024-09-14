import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService, private r: Router) { }

  onLogout(): void {
    this.authService.logout(); // Call the logout method from your service

    this.r.navigate(['/login-register']);
  }

}
