import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Category } from '../../models/dish.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories: Category[];
  activeId = 'all';

  constructor(private menuService: MenuService) {
    this.categories = this.menuService.categories;
  }

  select(cat: Category): void {
    this.activeId = cat.id;
    window.dispatchEvent(new CustomEvent('royal-category', { detail: cat.id }));
    setTimeout(() => {
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}
