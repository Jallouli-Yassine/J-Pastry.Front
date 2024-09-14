import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = 'http://localhost:3000/api';  // Adjust the URL to match your API
  

  constructor(private http: HttpClient) {}

  
  signup(userData: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  login(credentials: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        // Check if the response contains the token
        if (response.status === 'success' && response.token) {
          // Save the token and user data to localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
      })
    );
  }

  logout(): void {
    // Remove token and user data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  
  

}
