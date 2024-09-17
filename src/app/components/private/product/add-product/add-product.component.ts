import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm!: FormGroup;
  categories: any[] = [];  // Array to store categories
  selectedFile: File | null = null;  // Store the selected file
  fileError: string | null = null;   // To show file errors, if any

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      pricePerUnit: new FormControl('', Validators.required),
      unit: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)  // Category form control
    });
  }

  get category() { return this.productForm.get('category'); }


  ngOnInit(): void {
    this.loadCategories();  // Load categories when component is initialized
  }

  // Fetch categories from the API
  loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (response) => {
        this.categories = response;  // Assuming the API returns categories in 'data'
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }



  // Submit the form and add the product
  addProduct(): void {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value,this.category?.value).subscribe({
        next: (response) => {
          console.log('Product added successfully:', response);
          this.router.navigate(['/shop']);  // Redirect after successful product addition
        },
        error: (error) => {
          console.error('Error adding product:', error);
        }
      });
    }
  }


  onFileSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.selectedFile = fileInput.files[0];

      // Check if the file is an image and has a valid size (optional)
      if (!this.selectedFile.type.startsWith('image/') || this.selectedFile.size > 5 * 1024 * 1024) {
        this.fileError = 'Please select an image smaller than 5MB.';
        this.selectedFile = null;
      } else {
        this.fileError = null;
      }
    }
  }
}
