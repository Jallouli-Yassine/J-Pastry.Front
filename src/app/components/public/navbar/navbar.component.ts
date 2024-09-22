import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import {CartService} from "../../../services/cart/cart.service";
import { OrderService } from 'src/app/services/order/order.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: any;
  role: string = 'guest';
  cart: any;  // To store the cart data
  error: string = '';  // To store error messages
  orderError: string = '';
  orderSuccess: string = '';
  ngOnInit(): void {
    // Get the current user from the UserService
    this.user = this.userService.getUser();
    this.role = this.user?.role || 'guest';
    this.loadCart();

  }
  constructor(private orderService: OrderService,private cartService: CartService,private userService: UserService,private authService: AuthService, private r: Router) { }

  onLogout(): void {
    this.r.navigate(['/login-register']);
    this.role = 'guest';
    this.user = null;
    this.authService.logout(); // Call the logout method from your service
    
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
  

  // Place an order
  placeOrder(): void {
    if (this.user) {
      this.orderService.placeOrder(this.user._id).subscribe({
        next: (response) => {
          this.orderSuccess = 'Order placed successfully!';
          this.orderError = '';
          // Optionally, clear the cart in the UI
          this.cart = null;
        },
        error: (err) => {
          this.orderError = 'Error placing order: ' + err;
          this.orderSuccess = '';
          console.error('Error placing order:', err);
        }
      });
    }
  }
}
