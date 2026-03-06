import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MenuGridComponent } from './components/menu-grid/menu-grid.component';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import { ChefSpecialsComponent } from './components/chef-specials/chef-specials.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartSidebarComponent } from './components/cart-sidebar/cart-sidebar.component';
import { DishModalComponent } from './components/dish-modal/dish-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    CategoriesComponent,
    MenuGridComponent,
    DishCardComponent,
    ChefSpecialsComponent,
    AboutComponent,
    ContactComponent,
    CartSidebarComponent,
    DishModalComponent,
    FooterComponent,
    NotificationComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
