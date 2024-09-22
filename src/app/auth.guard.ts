import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';  // Use Angular's inject function
import { UserService } from './services/user/user.service';

export const authGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);  // Inject your user service
  const token = localStorage.getItem('token');  // Check for token in localStorage
  const router = inject(Router);  // Inject the Router instance

  const user = userService.getUser();  // Get the logged-in user


  if (token) {
    if (user.etat === false) {
      // If the user's etat is false, redirect to the waitAdminComponent
      alert('Your account is waiting for admin approval, you will be notified with email when your account is approved.');
      return false;
    }
    // If token exists and user's etat is true, allow access
    return true;
  } else {
    // If no token, redirect to the login page
    router.navigate(['/login-register']);
    return false;
  }
};

export const authReverseGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token'); // Check for token in localStorage
  const router = inject(Router); // Inject Router

  if (token) {
    // If the user is logged in (token exists), redirect them to the home page
    router.navigate(['/home']);
    return false; // Block access to the auth page
  } else {
    // If no token, allow access to the login-register page
    return true;
  }
};