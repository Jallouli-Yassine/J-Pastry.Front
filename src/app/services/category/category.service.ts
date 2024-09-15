import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private baseUrl = 'http://localhost:3000/api/category';  // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  // Method to fetch all categories
  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}