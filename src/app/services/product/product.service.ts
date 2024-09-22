import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/api/product';

  constructor(private http: HttpClient) { }
  /*
    addProduct(productData: any, categoryId: string): Observable<any> {
      return this.http.post(`${this.baseUrl}/${categoryId}`, productData);
    }
   */

  // Update method to handle FormData for product creation
  addProduct(productData: FormData, categoryId: string): Observable<any> {

    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });

    return this.http.post(`${this.baseUrl}/${categoryId}`, productData, { headers });
  }
  
  // Method to fetch all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }



}
