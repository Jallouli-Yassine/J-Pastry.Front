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
import { TableProductComponent } from './components/private/product/table-product/table-product.component';
import { UserOrdersComponent } from './components/private/user-orders/user-orders.component';
import { UserProfileAlertComponent } from './components/private/user-profile-alert/user-profile-alert.component';
import { OrdersTableComponent } from './components/private/dashboard/orders-table/orders-table.component';
import { EmailFormPassForgetComponent } from './components/public/email-form-pass-forget/email-form-pass-forget.component';
import { NewPasswordComponent } from './components/public/new-password/new-password.component';

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
    path: 'emailFP',
    component: EmailFormPassForgetComponent,
  },
  {
    path: 'newPassword',
    component: NewPasswordComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [authGuard], // Protect this route with the authGuard
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
    canActivate: [authGuard], // Protect this route with the authGuard
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
          },
        ],
      },
      {
        path: 'orders',
        component: OrdersTableComponent,
      },
    ],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: UserProfileAlertComponent,
      },
      {
        path: 'myOrders',
        component: UserOrdersComponent,
      },
    ],
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
export class AppRoutingModule {}
