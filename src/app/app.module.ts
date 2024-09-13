import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './public/slider/slider.component';
import { HomeComponent } from './public/home/home.component';
import { ProductBunnerComponent } from './public/product-bunner/product-bunner.component';
import { FooterComponent } from './public/footer/footer.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { NewestProductsComponent } from './public/newest-products/newest-products.component';
import { NewestCollectionsComponent } from './public/newest-collections/newest-collections.component';
import { MobileNavbarComponent } from './public/mobile-navbar/mobile-navbar.component';
import { ShopComponent } from './private/shop/shop.component';
import { LoginRegisterComponent } from './public/login-register/login-register.component';
import { ScrollToTopComponent } from './public/scroll-to-top/scroll-to-top.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { TopBarShpopComponent } from './public/top-bar-shpop/top-bar-shpop.component';
import { ContactComponent } from './private/contact/contact.component';
import { MapComponent } from './private/map/map.component';
import { ShopAllPacksComponent } from './private/shop-all-packs/shop-all-packs.component';
import { ProfileComponent } from './private/profile/profile.component';
import { HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
