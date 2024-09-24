import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { CartService } from '../../../services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  user: any;
  role: string = 'guest';
  cart: any;  // To store the cart data
  error: string = '';  // To store error messages
  orderError: string = '';
  orderSuccess: string = '';
  isAuthenticated: boolean = false;  // Track authentication state
  private authSubscription!: Subscription;  // To manage subscription

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Subscribe to authentication state changes
    this.authSubscription = this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      if (isAuthenticated) {
        // User just logged in, load user data and cart
        this.user = this.userService.getUser();
        this.role = this.user?.role || 'guest';
        this.loadCart();  // Load the cart when the user is logged in
      } else {
        // User is logged out, clear data
        this.user = null;
        this.role = 'guest';
        this.cart = null;
      }
    });

    // Manually set the initial state based on authentication
    this.isAuthenticated = this.authService.isLoggedIn();
    if (this.isAuthenticated) {
      this.user = this.userService.getUser();
      this.role = this.user?.role || 'guest';
      this.loadCart();
    }
  }

  onLogout(): void {
    this.authService.logout();  // Call the logout method from your service
    this.router.navigate(['/login-register']);
  }

  // Method to load the user cart
  loadCart(): void {
    if (this.user) {
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

  // Place an order
  placeOrder(): void {
    if (this.user) {
      this.orderService.placeOrder(this.user._id).subscribe({
        next: (response) => {
          this.orderSuccess = 'Order placed successfully!';
          this.orderError = '';
          this.cart = null;  // Clear cart in UI after order
        },
        error: (err) => {
          this.orderError = 'Error placing order: ' + err;
          this.orderSuccess = '';
          console.error('Error placing order:', err);
        }
      });
    }
  }

  ngOnDestroy(): void {
    // Unsubscribe from authentication state changes to avoid memory leaks
    this.authSubscription.unsubscribe();
  }
}
