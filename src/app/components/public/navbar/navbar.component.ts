import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import {CartService} from "../../../services/cart/cart.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: any;

  cart: any;  // To store the cart data
  error: string = '';  // To store error messages

  ngOnInit(): void {
    // Get the current user from the UserService
    this.user = this.userService.getUser();
    this.loadCart();

  }
  constructor(private cartService: CartService,private userService: UserService,private authService: AuthService, private r: Router) { }

  onLogout(): void {
    this.authService.logout(); // Call the logout method from your service

    this.r.navigate(['/login-register']);
  }


  // Method to load the user cart
  loadCart(): void {
    this.cartService.getUserCart(this.user._id).subscribe({
      next: (response) => {
        this.cart = response.data.cart;
        console.log('Cart data:', this.cart);  // Log the cart data for debugging
      },
      error: (err) => {
        this.error = err;
        console.error('Error loading cart:', this.error);  // Log the error for debugging
      }
    });
  }

}
