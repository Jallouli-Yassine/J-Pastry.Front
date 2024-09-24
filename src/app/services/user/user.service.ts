import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any = null;

  constructor() {
    this.loadUserFromLocalStorage(); // Load user from localStorage when the service is created
  }

  // Get the current user
  getUser(): any {
    return this.user;
  }

  // Load user from localStorage when the app starts or after login
  loadUserFromLocalStorage(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      this.user = null;
    }
  }
}