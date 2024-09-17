import { Component } from '@angular/core';
import {Product} from "../../../models/product/product";
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products: Product[] = []; // Array to hold the products
  selectedProduct: any;

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

  // Method to select the product
  selectProduct(product: any) {
    this.selectedProduct = product;
  }
}
