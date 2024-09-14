import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { ShopComponent } from './private/shop/shop.component';
import { LoginRegisterComponent } from './public/login-register/login-register.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { ContactComponent } from './private/contact/contact.component';
import { ShopAllPacksComponent } from './private/shop-all-packs/shop-all-packs.component';
import { ProfileComponent } from './private/profile/profile.component';
import { authGuard, authReverseGuard } from './auth.guard';

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
    path: '**',
    component: PageNotFoundComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
