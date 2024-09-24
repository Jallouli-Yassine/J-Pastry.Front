import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent {
  user: any;
  error: string = '';
  orders: any[] = [];
  constructor(private orderService: OrderService, private userService: UserService) { }

  ngOnInit(): void {
    // Get the current user
    this.user = this.userService.getUser();

    // Load user orders if the user is logged in
    if (this.user) {
      this.loadUserOrders();
    }
  }

  // Load the user's orders
  loadUserOrders(): void {
    this.orderService.getUserOrders(this.user._id).subscribe({
      next: (response) => {
        this.orders = response.data.orders;
        console.log('User orders:', this.orders);  // Log orders for debugging
      },
      error: (err) => {
        this.error = err;
        console.error('Error fetching user orders:', this.error);  // Log error for debugging
      }
    });
  }
}
