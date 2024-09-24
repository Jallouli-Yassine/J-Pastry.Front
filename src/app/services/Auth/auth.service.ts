import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';  // Import UserService

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl = 'http://localhost:3000/api';  // Adjust the URL to match your API
  
  // Create BehaviorSubject to track authentication state
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient, private userService: UserService) {}  // Inject UserService

  // Method to check if user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');  // Check if token exists in localStorage
  }

  // Signup method
  signup(userData: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, userData);
  }

  // Login method
  login(credentials: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.status === 'success' && response.token) {
          // Save token and user to localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));

          // Update UserService with the new user
          this.userService.loadUserFromLocalStorage();  // Ensure user is updated in the service

          // Notify that the user is authenticated
          this.isAuthenticatedSubject.next(true);
        }
      })
    );
  }

  // Logout method
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isAuthenticatedSubject.next(false);  // Notify that the user is logged out
  }
}
