import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/public/slider/slider.component';
import { HomeComponent } from './components/public/home/home.component';
import { ProductBunnerComponent } from './components/public/product-bunner/product-bunner.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { NewestProductsComponent } from './components/public/newest-products/newest-products.component';
import { NewestCollectionsComponent } from './components/public/newest-collections/newest-collections.component';
import { MobileNavbarComponent } from './components/public/mobile-navbar/mobile-navbar.component';
import { ShopComponent } from './components/private/shop/shop.component';
import { LoginRegisterComponent } from './components/public/login-register/login-register.component';
import { ScrollToTopComponent } from './components/public/scroll-to-top/scroll-to-top.component';
import { PageNotFoundComponent } from './components/public/page-not-found/page-not-found.component';
import { TopBarShpopComponent } from './components/public/top-bar-shpop/top-bar-shpop.component';
import { ContactComponent } from './components/private/contact/contact.component';
import { MapComponent } from './components/private/map/map.component';
import { ShopAllPacksComponent } from './components/private/shop-all-packs/shop-all-packs.component';
import { ProfileComponent } from './components/private/profile/profile.component';
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { AddProductComponent } from './components/private/product/add-product/add-product.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';
import { AllProductsComponent } from './components/private/product/all-products/all-products.component';
import { TableProductComponent } from './components/private/product/table-product/table-product.component';
import { UserOrdersComponent } from './components/private/user-orders/user-orders.component';
import { UserProfileAlertComponent } from './components/private/user-profile-alert/user-profile-alert.component';
import { OrdersTableComponent } from './components/private/dashboard/orders-table/orders-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    ProductBunnerComponent,
    FooterComponent,
    NavbarComponent,
    NewestProductsComponent,
    NewestCollectionsComponent,
    MobileNavbarComponent,
    ShopComponent,
    LoginRegisterComponent,
    ScrollToTopComponent,
    PageNotFoundComponent,
    TopBarShpopComponent,
    ContactComponent,
    MapComponent,
    ShopAllPacksComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent,
    DashboardComponent,
    AllProductsComponent,
    TableProductComponent,
    UserOrdersComponent,
    UserProfileAlertComponent,
    OrdersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //  FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
