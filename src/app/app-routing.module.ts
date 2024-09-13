import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { ShopComponent } from './private/shop/shop.component';
import { LoginRegisterComponent } from './public/login-register/login-register.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { ContactComponent } from './private/contact/contact.component';
import { ShopAllPacksComponent } from './private/shop-all-packs/shop-all-packs.component';
import { ProfileComponent } from './private/profile/profile.component';

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
  },
  {
    path: 'login-register',
    component: LoginRegisterComponent,
  },
  {
    path: 'contact-us',
    component: ContactComponent,
  },
  {
    path: 'packs',
    component: ShopAllPacksComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
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
