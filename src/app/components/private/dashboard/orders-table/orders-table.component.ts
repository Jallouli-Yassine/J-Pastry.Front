import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css'],
})
export class OrdersTableComponent {
  orders: any[] = [];
  status: string = 'pending';
  error: string = '';
  selectedOrder: any; // Hold the order details for the modal

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    // Load orders with a specific status, e.g., 'Pending'
    this.loadOrdersByStatus(this.status);
  }

  changeStatus(newStatus: string): void {
    this.status = newStatus;
    this.loadOrdersByStatus(this.status);
  }

  // Load orders based on status
  loadOrdersByStatus(status: string): void {
    this.orderService.getOrdersByStatus(status).subscribe({
      next: (response) => {
        this.orders = response.data.orders;
        console.log('Orders with status', status, this.orders); // Debugging output
      },
      error: (err) => {
        this.error = err;
        console.error('Error fetching orders:', this.error); // Debugging output
      },
    });
  }

  // When "View" is clicked, set the selected order for the modal
  onViewOrder(order: any): void {
    this.selectedOrder = order;
  }
  // Method to confirm an order
  confirmOrder(orderId: string): void {
    this.updateOrderStatus(orderId, 'confirmed');
  }

  // Method to refuse an order
  refuseOrder(orderId: string): void {
    this.updateOrderStatus(orderId, 'cancelled');
  }

  // Generic method to update order status
  updateOrderStatus(orderId: string, status: string): void {
    this.orderService.updateOrderStatus(orderId, status).subscribe({
      next: (response) => {
        console.log(`Order ${orderId} updated to status ${status}`);
        this.loadOrdersByStatus(this.status); // Reload orders after updating
      },
      error: (err: HttpErrorResponse) => {
        this.error = err.message;
        console.error('Error updating order status:', this.error); // Debugging output
      },
    });
  }
}
