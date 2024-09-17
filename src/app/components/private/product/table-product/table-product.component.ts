import { Component } from '@angular/core';
import {Product} from "../../../../models/product/product";
import {ProductService} from "../../../../services/product/product.service";

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.css']
})
export class TableProductComponent {
  products: Product[] = []; // Array to hold the products

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Load products from the service
  loadProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data; // Bind data to the products array
    });
  }
}
