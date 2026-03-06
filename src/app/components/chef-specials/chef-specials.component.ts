import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { CartService } from '../../services/cart.service';
import { ChefSpecial } from '../../models/dish.model';

@Component({
  selector: 'app-chef-specials',
  templateUrl: './chef-specials.component.html',
  styleUrls: ['./chef-specials.component.css'],
})
export class ChefSpecialsComponent {
  specials: ChefSpecial[];

  constructor(private menuService: MenuService, private cartService: CartService) {
    this.specials = this.menuService.chefSpecials;
  }

  addToCart(s: ChefSpecial): void {
    this.cartService.addItem({ id: s.id, name: s.name, price: s.price, image: s.image });
  }
}
