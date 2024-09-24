import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/api/order';

  constructor(private http: HttpClient) {}

  // Method to place an order
  placeOrder(userId: string): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/placeOrder/${userId}`, {})
      .pipe(catchError(this.handleError));
  }

  // Fetch user orders by userId
  getUserOrders(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUserOrders/${userId}`);
  }

  // Method to get orders by status
  getOrdersByStatus(status: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/ordersByStatus/${status}`);
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
