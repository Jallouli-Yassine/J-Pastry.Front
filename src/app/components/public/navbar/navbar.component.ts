import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: any;
  
  ngOnInit(): void {
    // Get the current user from the UserService
    this.user = this.userService.getUser();
  }
  constructor(private userService: UserService,private authService: AuthService, private r: Router) { }

  onLogout(): void {
    this.authService.logout(); // Call the logout method from your service

    this.r.navigate(['/login-register']);
  }

}
