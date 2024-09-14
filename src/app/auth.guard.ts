import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';  // Use Angular's inject function

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');  // Check for token in localStorage
  const router = inject(Router);  // Inject the Router instance

  if (token) {
    // If the token exists, allow access to the route
    return true;
  } else {
    // If no token, redirect to the login page
    router.navigate(['/login-register']);  // Redirect to login
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