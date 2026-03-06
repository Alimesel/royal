# ✦ Royal Taste — Luxury Hotel Restaurant Menu
## Angular Digital Menu System

---

## 📁 Project Structure

```
src/
├── index.html
├── styles.css                          ← Global CSS variables & utilities
└── app/
    ├── app.module.ts                   ← Registers all components
    ├── app.component.ts/html/css       ← Root shell
    │
    ├── models/
    │   └── dish.model.ts               ← TypeScript interfaces
    │
    ├── services/
    │   ├── menu.service.ts             ← All dish/category data + search
    │   └── cart.service.ts             ← Cart state (BehaviorSubject)
    │
    └── components/
        ├── navbar/                     ← Sticky nav, search, dark mode, cart toggle
        ├── hero/                       ← Background slideshow, floating dish images, stats
        ├── categories/                 ← Real photo category cards (9 categories)
        ├── menu-grid/                  ← Filtered dish grid, listens to category events
        ├── dish-card/                  ← Individual dish with image, price, allergens
        ├── chef-specials/              ← Premium 4 chef specials with full-width layout
        ├── about/                      ← Restaurant story, chef profile, gallery
        ├── contact/                    ← Map, info cards, reservation form
        ├── cart-sidebar/               ← Slide-out cart with qty controls
        ├── dish-modal/                 ← Full dish details popup
        ├── footer/                     ← Links, social, copyright
        └── notification/               ← Toast notification service
```

---

## 🚀 Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
ng serve

# 3. Open browser
# http://localhost:4200
```

---

## ✦ Features

### UI/UX
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Real food photography (Unsplash)
- ✅ Hero background slideshow with parallax overlay
- ✅ Floating dish showcase with orbit rings
- ✅ Smooth CSS animations & scroll reveal
- ✅ Dark / Light mode toggle

### Menu
- ✅ 9 category cards with real images
- ✅ 51+ dishes across all categories
- ✅ Filter buttons (Chef's Choice, Popular, New, Vegetarian)
- ✅ Full dish detail modal (ingredients, allergens, nutrition)
- ✅ Star ratings & review count
- ✅ Allergen icons (gluten, dairy, nuts, etc.)
- ✅ Calorie count per dish
- ✅ Dish badges (Chef's Choice, Hot, New, Vegan)
- ✅ 4 Chef's Specials with premium full-width layout

### Interactive
- ✅ Cart system (add/remove/adjust qty)
- ✅ Favourites toggle per dish
- ✅ Live search by name, description, ingredients
- ✅ Toast notifications
- ✅ Table reservation form
- ✅ Smooth scroll between sections

---

## 🖼️ Images
All images are sourced from [Unsplash](https://unsplash.com) (free to use).
For production, replace with your own licensed photography.

---

## 🎨 Colors
| Variable       | Value       | Usage            |
|---------------|-------------|------------------|
| `--gold`      | `#c9a84c`   | Primary accent   |
| `--navy`      | `#08101e`   | Background       |
| `--navy-card` | `#111e33`   | Card background  |
| `--text-main` | `#f0e8d8`   | Body text        |
| `--text-dim`  | `#9a8f80`   | Muted text       |

---

## 📦 Built With
- Angular 17
- RxJS (BehaviorSubject for cart)
- Font Awesome 6 (icons)
- Google Fonts: Playfair Display, Cinzel, Cormorant Garamond
- Unsplash (food photography)
