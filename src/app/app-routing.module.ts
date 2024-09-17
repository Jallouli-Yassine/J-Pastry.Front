import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { ShopComponent } from './components/private/shop/shop.component';
import { LoginRegisterComponent } from './components/public/login-register/login-register.component';
import { PageNotFoundComponent } from './components/public/page-not-found/page-not-found.component';
import { ContactComponent } from './components/private/contact/contact.component';
import { ShopAllPacksComponent } from './components/private/shop-all-packs/shop-all-packs.component';
import { ProfileComponent } from './components/private/profile/profile.component';
import { authGuard, authReverseGuard } from './auth.guard';
import { AddProductComponent } from './components/private/product/add-product/add-product.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { AllProductsComponent } from './components/private/product/all-products/all-products.component';
import {TableProductComponent} from "./components/private/product/table-product/table-product.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [authGuard],  // Protect this route with the authGuard
  },
  {
    path: 'login-register',
    component: LoginRegisterComponent,
    canActivate: [authReverseGuard], // Prevent access if logged in

  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'packs',
    component: ShopAllPacksComponent,
    canActivate: [authGuard],  // Protect this route with the authGuard
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],  // Protect this route with the authGuard
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'all-products',
        component: AllProductsComponent,
        children: [
            {
                path: '',
                component: TableProductComponent,
            },
          {
            path: 'addProduct',
            component: AddProductComponent,
          }
        ]
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
