import { Component } from '@angular/core';
import {Product} from "../../../models/product/product";
import {ProductService} from "../../../services/product/product.service";
import { UserService } from 'src/app/services/user/user.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products: Product[] = []; // Array to hold the products
  selectedProduct: any;
  user: any;

  constructor(private cartService: CartService, private r: Router,private productService: ProductService,private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.loadProducts();


 //   console.log("deheeeeeeee:"+this.products);
  }


  addItemToCart(itemId: string, itemType: 'product' | 'pack'): void {
    if (!this.user) {
      alert('You need to be logged in to add items to your cart.');
      return;
    }

    this.cartService.addToCart(this.user._id, itemId, itemType).subscribe(
      (response) => {
        this.r.navigate(['/profile']);
        //this.r.navigate(['/shop']);
        alert('Item added to cart successfully!');
      },
      (error) => {
        console.error('Error adding item to cart:', error);
        alert('There was an error adding the item to your cart.');
      }
    );
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
