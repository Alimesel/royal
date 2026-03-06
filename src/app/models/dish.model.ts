export interface Dish {
  id: number;
  cat: string;
  name: string;
  desc: string;
  image: string;
  price: number;
  calories: number;
  rating: number;
  reviews: number;
  badge: 'chef' | 'hot' | 'new' | 'vegan' | '';
  allergens: string[];
  ingredients: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subLabel: string;
  count: number;
}

export interface ChefSpecial {
  id: string;
  name: string;
  desc: string;
  image: string;
  price: number;
  ingredients: string[];
}

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  image: string;
  qty: number;
}
