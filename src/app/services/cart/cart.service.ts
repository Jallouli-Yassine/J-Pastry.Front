import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000/api/cart';


  constructor(private http: HttpClient) {}

  // Method to get the user's cart by userId
  getUserCart(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUserCart/${userId}`)
      .pipe(
        catchError(this.handleError)  // Catch and handle errors
      );
  }

  // Add item to cart (product or pack)
  addToCart(userId: string, itemId: string, itemType: 'product' | 'pack'): Observable<any> {
    return this.http.post(`${this.apiUrl}/addToCart/${userId}/${itemId}/${itemType}`, {})
      .pipe(
        catchError(this.handleError)
      );
  }



  // Error handling method
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
