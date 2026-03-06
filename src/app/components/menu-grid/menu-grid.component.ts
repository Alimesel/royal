import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Dish } from '../../models/dish.model';

@Component({
  selector: 'app-menu-grid',
  templateUrl: './menu-grid.component.html',
  styleUrls: ['./menu-grid.component.css'],
})
export class MenuGridComponent implements OnInit, OnDestroy {
  dishes: Dish[] = [];
  activeCategory = 'all';
  activeFilter = 'all';
  filters = [
    { id: 'all',  label: 'All' },
    { id: 'chef', label: "Chef's Choice" },
    { id: 'hot',  label: '🔥 Popular' },
    { id: 'new',  label: 'New Arrivals' },
    { id: 'vegan',label: '🌱 Vegetarian' },
  ];

  private catListener = (e: Event) => {
    this.activeCategory = (e as CustomEvent).detail;
    this.activeFilter = 'all';
    this.loadDishes();
  };
  private searchListener = (e: Event) => {
    const results = (e as CustomEvent).detail;
    this.dishes = results ?? this.menuService.getDishes(this.activeCategory);
  };

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.loadDishes();
    window.addEventListener('royal-category', this.catListener);
    window.addEventListener('royal-search', this.searchListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('royal-category', this.catListener);
    window.removeEventListener('royal-search', this.searchListener);
  }

  loadDishes(): void {
    let list = this.menuService.getDishes(this.activeCategory);
    if (this.activeFilter !== 'all') {
      list = list.filter(d => d.badge === this.activeFilter);
    }
    this.dishes = list;
  }

  applyFilter(filterId: string): void {
    this.activeFilter = filterId;
    this.loadDishes();
  }

  trackById(_: number, d: Dish): number { return d.id; }
}
