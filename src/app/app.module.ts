import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/product-category/products/products.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';

import { ProductCategoryComponent } from './components/product-category/product-category.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './components/product-category/products/products.service';
import { ProductListComponent } from './components/product-category/products/product-list/product-list.component';
import { ProductItemComponent } from './components/product-category/products/product-list/product-item/product-item.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NavbarComponent,
    ProductsComponent,
    ProductCategoryComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
