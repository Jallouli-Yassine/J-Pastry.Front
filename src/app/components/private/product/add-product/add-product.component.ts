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
  imageUrl!: string;
  selectedFile!: File;
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
  get ImageP() { return this.productForm.get('imageUrl'); }


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
      
      const formData = new FormData();
    
      // Append product data fields to the FormData object
      formData.append('name', this.productForm.get('name')!.value);
      formData.append('description', this.productForm.get('description')!.value);
      formData.append('pricePerUnit', this.productForm.get('pricePerUnit')!.value);
      formData.append('unit', this.productForm.get('unit')!.value);
      formData.append('stock', this.productForm.get('stock')!.value);
      formData.append('category', this.productForm.get('category')!.value);

      // Append the image file
      formData.append('imageUrl', this.selectedFile);

      this.productService.addProduct(formData,this.category?.value).subscribe({
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


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.imageUrl = URL.createObjectURL(this.selectedFile);
  }

}
