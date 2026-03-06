import { Injectable } from '@angular/core';
import { Dish, Category, ChefSpecial } from '../models/dish.model';

@Injectable({ providedIn: 'root' })
export class MenuService {

  /** Allergens — Font Awesome icon classes only, zero emoji */
  readonly allergens: Record<string, { icon: string; label: string }> = {
    gluten:    { icon: 'fas fa-wheat-awn',  label: 'Gluten'    },
    nuts:      { icon: 'fas fa-seedling',   label: 'Nuts'      },
    dairy:     { icon: 'fas fa-droplet',    label: 'Dairy'     },
    egg:       { icon: 'fas fa-circle-dot', label: 'Egg'       },
    soy:       { icon: 'fas fa-leaf',       label: 'Soy'       },
    shellfish: { icon: 'fas fa-shrimp',     label: 'Shellfish' },
    spicy:     { icon: 'fas fa-fire-flame-curved', label: 'Spicy' },
    vegan:     { icon: 'fas fa-spa',        label: 'Vegan'     },
    fish:      { icon: 'fas fa-fish',       label: 'Fish'      },
  };

  readonly categories: Category[] = [
    { id: 'all',      name: 'All Dishes',     subLabel: 'Complete Menu',    count: 0,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80' },
    { id: 'starters', name: 'Starters',        subLabel: 'Light Beginnings', count: 8,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80' },
    { id: 'mains',    name: 'Main Courses',    subLabel: 'Signature Plates', count: 7,
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80' },
    { id: 'grills',   name: 'Grills',          subLabel: 'Fire & Smoke',     count: 6,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80' },
    { id: 'seafood',  name: 'Seafood',         subLabel: 'Ocean Harvest',    count: 6,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80' },
    { id: 'pasta',    name: 'Pasta & Risotto', subLabel: 'Italian Soul',     count: 5,
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80' },
    { id: 'desserts', name: 'Desserts',        subLabel: 'Sweet Endings',    count: 6,
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80' },
    { id: 'drinks',   name: 'Drinks',          subLabel: 'Fine Beverages',   count: 9,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80' },
    { id: 'kids',     name: 'Kids Menu',       subLabel: 'Little Guests',    count: 4,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80' },
  ];

  readonly chefSpecials: ChefSpecial[] = [
    { id: 'cs1', name: 'Royal Crown of Lamb', price: 185,
      desc: 'Whole crown of lamb for two, herb-scented wild mushroom stuffing, black truffle jus, and a cascade of seasonal vegetables roasted to perfection.',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1000&q=85',
      ingredients: ['Crown of Lamb','Black Truffle','Wild Mushrooms','Seasonal Vegetables','Rosemary Jus'] },
    { id: 'cs2', name: 'Gold Leaf Wagyu A5', price: 210,
      desc: "A5 Japanese Wagyu ribeye adorned with 24-carat gold leaf, bone marrow butter, aged cognac reduction, and a Parmesan fonduta — the pinnacle of our kitchen.",
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85',
      ingredients: ['A5 Wagyu Ribeye','24K Gold Leaf','Bone Marrow','Aged Cognac','Parmesan Fonduta'] },
    { id: 'cs3', name: 'Diamond Seafood Tower', price: 320,
      desc: 'Three breathtaking tiers of premium seafood: Gillardeau oysters, Alaskan king crab, Norwegian langoustines, whole lobster, and fresh sea urchin.',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=85',
      ingredients: ['King Crab','Whole Lobster','Langoustines','Oysters','Sea Urchin'] },
    { id: 'cs4', name: 'Black Truffle Tasting', price: 245,
      desc: "An immersive four-course truffle journey: velouté, risotto, pasta, and dark chocolate truffle dessert — celebrating Périgord's finest black diamonds.",
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1000&q=85',
      ingredients: ['Black Périgord Truffle','Foie Gras','Champagne','Parmesan','Gold Dust'] },
  ];

  readonly dishes: Dish[] = [
    // STARTERS
    { id:1,  cat:'starters', name:'Foie Gras Terrine',      price:32,  calories:380, rating:4.9, reviews:142, badge:'chef', allergens:['gluten','dairy','egg'],      ingredients:['Duck Foie Gras','Brioche','Sauternes Wine','Fig Compote','Fleur de Sel'], desc:'Pan-seared duck foie gras with toasted brioche, Sauternes jelly, and seasonal fruit compote.',
      image:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80' },
    { id:2,  cat:'starters', name:'Lobster Bisque',          price:28,  calories:320, rating:4.8, reviews:210, badge:'hot',  allergens:['shellfish','dairy'],         ingredients:['Maine Lobster','Cognac','Heavy Cream','Tarragon','Butter'], desc:'Classic French bisque with fresh Maine lobster, cognac cream, and chive oil.',
      image:'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80' },
    { id:3,  cat:'starters', name:'Black Truffle Burrata',   price:36,  calories:290, rating:4.9, reviews:98,  badge:'new',  allergens:['dairy'],                     ingredients:['Burrata','Black Truffle','Heirloom Tomatoes','Basil Oil','Aged Balsamic'], desc:'Hand-stretched burrata with black truffle shavings, aged balsamic, and heirloom tomatoes.',
      image:'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80' },
    { id:4,  cat:'starters', name:'Beef Carpaccio',          price:26,  calories:240, rating:4.7, reviews:165, badge:'',    allergens:['dairy','nuts'],              ingredients:['Prime Beef','Rocket','Parmesan','Capers','Truffle Oil'], desc:'Thinly sliced prime beef, rocket salad, Parmesan shavings, capers, and truffle vinaigrette.',
      image:'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80' },
    { id:5,  cat:'starters', name:'Oysters Royale (6)',      price:38,  calories:90,  rating:4.8, reviews:87,  badge:'new',  allergens:['shellfish'],                 ingredients:['Gillardeau Oysters','Champagne','Shallots','Red Wine Vinegar','Dill'], desc:'Six freshly shucked Gillardeau oysters with mignonette sauce and Champagne granita.',
      image:'https://images.unsplash.com/photo-1513125370-3460ebe3401b?auto=format&fit=crop&w=600&q=80' },
    { id:6,  cat:'starters', name:'Scallop Ceviche',         price:30,  calories:180, rating:4.9, reviews:74,  badge:'chef', allergens:['shellfish'],                 ingredients:['Hokkaido Scallops','Lime Juice','Avocado','Jalapeño','Coriander'], desc:'Seared Hokkaido scallops with lime ceviche marinade, avocado purée, and micro herbs.',
      image:'https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?auto=format&fit=crop&w=600&q=80' },
    { id:7,  cat:'starters', name:'Smoked Salmon Rillette',  price:24,  calories:290, rating:4.7, reviews:132, badge:'',    allergens:['fish','dairy','gluten'],     ingredients:['Smoked Salmon','Cream Cheese','Capers','Dill','Rye Cracker'], desc:'House-smoked salmon rillette, cream cheese, pickled cucumber, dill, and crisp rye crackers.',
      image:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80' },
    { id:8,  cat:'starters', name:'Duck Confit Toast',       price:22,  calories:420, rating:4.7, reviews:119, badge:'',    allergens:['gluten','egg'],              ingredients:['Duck Leg','Sourdough','Shallots','Rocket','Duck Fat'], desc:'Slow-cooked duck leg confit on artisan sourdough with caramelised shallots and rocket pesto.',
      image:'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=600&q=80' },
    // MAINS
    { id:9,  cat:'mains', name:'Wagyu Beef Tenderloin',      price:95,  calories:720, rating:5.0, reviews:312, badge:'chef', allergens:['dairy','gluten'],           ingredients:['A5 Wagyu Beef','Truffle','Potato','Asparagus','Red Wine Jus'], desc:'A5 Japanese Wagyu, truffle mashed potato, seasonal asparagus, and rich red wine jus.',
      image:'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80' },
    { id:10, cat:'mains', name:"Duck à l'Orange",           price:58,  calories:640, rating:4.8, reviews:187, badge:'',    allergens:['dairy','gluten'],           ingredients:['Duck','Orange','Endive','Dauphinoise Potato','Butter'], desc:'Confit duck leg and breast, classic orange sauce, braised endive, and Dauphinoise potato.',
      image:'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80' },
    { id:11, cat:'mains', name:'Sea Bass en Croûte',        price:62,  calories:560, rating:4.9, reviews:143, badge:'new',  allergens:['gluten','dairy','fish'],    ingredients:['Sea Bass','Puff Pastry','Lemon','Spinach','Dill'], desc:'Line-caught sea bass wrapped in golden pastry with lemon butter and wilted spinach.',
      image:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80' },
    { id:12, cat:'mains', name:'Rack of Lamb',              price:72,  calories:680, rating:4.9, reviews:221, badge:'hot',  allergens:['gluten','dairy'],           ingredients:['Lamb Rack','Herbs','Polenta','Courgette','Tomato'], desc:'French-trimmed rack with herb crust, rosemary jus, ratatouille, and polenta.',
      image:'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80' },
    { id:13, cat:'mains', name:'Risotto al Tartufo',        price:68,  calories:520, rating:4.8, reviews:165, badge:'vegan',allergens:['dairy'],                    ingredients:['Carnaroli Rice','White Truffle','Parmesan','Shallots','White Wine'], desc:'Aged Carnaroli rice, white Alba truffle, aged Parmigiano Reggiano, and chive butter.',
      image:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80' },
   
    { id:15, cat:'mains', name:'Filet Mignon 8oz',          price:98,  calories:640, rating:5.0, reviews:289, badge:'chef', allergens:['dairy','gluten'],           ingredients:['Beef Tenderloin','Truffle Butter','Green Peppercorn','Shallots','Cream'], desc:'8oz centre-cut beef tenderloin, truffle butter, green peppercorn sauce, and pommes Anna.',
      image:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80' },
    // GRILLS
    { id:16, cat:'grills', name:'Prime Ribeye 300g',         price:88,  calories:820, rating:5.0, reviews:387, badge:'hot',  allergens:['dairy','gluten'],           ingredients:['Prime Ribeye','Garlic','Butter','Shallots','Rosemary'], desc:'USDA prime dry-aged ribeye, roasted garlic butter, golden fries, and red wine sauce.',
      image:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80' },
    { id:17, cat:'grills', name:'Tomahawk Steak 1kg',        price:155, calories:1240,rating:5.0, reviews:267, badge:'chef', allergens:['dairy'],                    ingredients:['Tomahawk Steak','Herb Butter','Roasted Garlic','Thyme','Sea Salt'], desc:'Spectacular dry-aged tomahawk ribeye, served tableside with compound butters and seasonal sides.',
      image:'https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?auto=format&fit=crop&w=600&q=80' },
    { id:18, cat:'grills', name:'Grilled Whole Lobster',     price:120, calories:480, rating:4.9, reviews:198, badge:'new',  allergens:['shellfish','dairy'],        ingredients:['Canadian Lobster','Drawn Butter','Garlic','Lemon','Chives'], desc:'Whole Canadian lobster split and grilled, drawn butter, lemon, and garlic herbs.',
      image:'https://images.unsplash.com/photo-1615361200141-f45040f367be?auto=format&fit=crop&w=600&q=80' },
    { id:19, cat:'grills', name:'BBQ Lamb Chops',            price:74,  calories:720, rating:4.8, reviews:143, badge:'',    allergens:['gluten'],                   ingredients:['Lamb Chops','Chimichurri','Peppers','Paprika','Potato'], desc:'Marinated rack of lamb chops, chimichurri, roasted peppers, and paprika potatoes.',
      image:'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80' },
    { id:20, cat:'grills', name:'Grilled Tiger Prawns',      price:68,  calories:380, rating:4.7, reviews:156, badge:'hot',  allergens:['shellfish','dairy'],        ingredients:['Tiger Prawns','Chilli','Garlic','Lime','Coconut Rice'], desc:'Jumbo tiger prawns grilled with chilli, garlic, lime butter, and coconut rice.',
      image:'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?auto=format&fit=crop&w=600&q=80' },
    { id:21, cat:'grills', name:'Mixed Grill Platter',       price:82,  calories:980, rating:4.8, reviews:312, badge:'',    allergens:['gluten','dairy'],           ingredients:['Chicken','Lamb','Beef','Merguez','Pita Bread'], desc:'Selection of grilled meats: chicken, lamb, beef, merguez sausage, with dips and bread.',
      image:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80' },
    // SEAFOOD
    { id:22, cat:'seafood', name:'King Crab Legs',           price:135, calories:380, rating:5.0, reviews:174, badge:'chef', allergens:['shellfish','dairy'],        ingredients:['Alaskan King Crab','Drawn Butter','Lemon','Dill','Old Bay'], desc:'Alaskan king crab legs, warm drawn butter, lemon wedges, and herb salad.',
      image:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80' },
    { id:23, cat:'seafood', name:'Seared Scallops',          price:68,  calories:310, rating:4.9, reviews:221, badge:'new',  allergens:['shellfish','dairy'],        ingredients:['Scottish Scallops','Cauliflower','Chorizo','Apple','Butter'], desc:'Pan-seared Scottish scallops, cauliflower purée, crispy chorizo, and apple vinaigrette.',
      image:'https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?auto=format&fit=crop&w=600&q=80' },
    { id:24, cat:'seafood', name:'Bouillabaisse Royale',     price:72,  calories:450, rating:4.8, reviews:98,  badge:'hot',  allergens:['shellfish','gluten','fish'], ingredients:['Monkfish','Mussels','Clams','Saffron','Rouille'], desc:'Traditional Provençal fish stew with monkfish, mussels, clams, saffron broth, and rouille.',
      image:'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=600&q=80' },
    { id:25, cat:'seafood', name:'Pan-Seared Salmon',        price:52,  calories:540, rating:4.7, reviews:209, badge:'',    allergens:['dairy','fish'],             ingredients:['Atlantic Salmon','Capers','Broccolini','Wild Rice','Lemon'], desc:'Atlantic salmon, lemon caper beurre blanc, broccolini, and wild rice.',
      image:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80' },
    { id:26, cat:'seafood', name:'Oyster Platter (12)',      price:88,  calories:120, rating:4.9, reviews:87,  badge:'',    allergens:['shellfish'],                ingredients:['Rock Oysters','Ponzu','Bloody Mary','Shallots','Tabasco'], desc:'Dozen premium rock oysters with three preparations: classic, ponzu, and bloody mary.',
      image:'https://images.unsplash.com/photo-1513125370-3460ebe3401b?auto=format&fit=crop&w=600&q=80' },
    // PASTA
    { id:27, cat:'pasta', name:'Truffle Tagliatelle',        price:58,  calories:620, rating:5.0, reviews:298, badge:'chef', allergens:['gluten','dairy','egg'],     ingredients:['Egg Pasta','Black Truffle','Parmesan','Cream','Butter'], desc:'Fresh egg tagliatelle, black truffle cream sauce, Parmesan fondue, and chive oil.',
      image:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80' },
    { id:28, cat:'pasta', name:'Lobster Linguine',           price:72,  calories:680, rating:4.9, reviews:187, badge:'hot',  allergens:['shellfish','gluten','dairy'], ingredients:['Lobster','Linguine','Saffron','Cherry Tomatoes','Tarragon'], desc:'Fresh lobster meat, linguine, saffron bisque, cherry tomatoes, and tarragon.',
      image:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80' },
    { id:29, cat:'pasta', name:'Black Ink Pasta',            price:54,  calories:560, rating:4.7, reviews:134, badge:'',    allergens:['shellfish','gluten','fish'], ingredients:['Squid Ink Pasta','Baby Squid','Bottarga','Capers','Lemon'], desc:'Handmade squid ink pasta, baby squid, bottarga, capers, and lemon zest.',
      image:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80' },
    { id:30, cat:'pasta', name:'Wild Mushroom Risotto',      price:48,  calories:580, rating:4.8, reviews:243, badge:'vegan',allergens:['dairy'],                    ingredients:['Carnaroli Rice','Porcini','Chanterelles','Parmesan','White Truffle'], desc:'Aged Carnaroli rice, porcini and chanterelle mushrooms, Parmesan, and white truffle oil.',
      image:'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80' },
    //Desserts
    { id:32, cat:'desserts', name:'Valrhona Fondant',        price:22,  calories:480, rating:5.0, reviews:412, badge:'hot',  allergens:['gluten','dairy','egg'],     ingredients:['Valrhona Chocolate','Butter','Eggs','Gold Leaf','Vanilla Ice Cream'], desc:'Warm Valrhona 70% chocolate fondant with vanilla bean ice cream and edible gold leaf.',
      image:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80' },
    { id:33, cat:'desserts', name:'Crème Brûlée Royale',    price:18,  calories:380, rating:4.9, reviews:356, badge:'',    allergens:['dairy','egg'],              ingredients:['Tahitian Vanilla','Cream','Eggs','Sugar','Raspberries'], desc:'Classic Tahitian vanilla crème brûlée with caramelised sugar and fresh raspberries.',
      image:'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=600&q=80' },
    { id:34, cat:'desserts', name:'Grand Marnier Soufflé',  price:28,  calories:420, rating:4.9, reviews:198, badge:'chef', allergens:['gluten','dairy','egg'],     ingredients:['Grand Marnier','Egg Whites','Sugar','Cream','Orange Zest'], desc:'Freshly baked Grand Marnier soufflé with crème anglaise and candied orange peel.',
      image:'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80' },
    { id:35, cat:'desserts', name:'Mango Pannacotta',        price:18,  calories:320, rating:4.7, reviews:156, badge:'vegan',allergens:['dairy'],                    ingredients:['Coconut Milk','Cream','Alphonso Mango','Passion Fruit','Lime'], desc:'Coconut pannacotta with Alphonso mango coulis, passion fruit, and lime zest.',
      image:'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80' },
    { id:36, cat:'desserts', name:'Opera Cake',              price:20,  calories:440, rating:4.8, reviews:134, badge:'new',  allergens:['gluten','dairy','egg','nuts'], ingredients:['Almond Sponge','Coffee Buttercream','Valrhona Ganache','Gold Leaf'], desc:'Classic French Opera — almond sponge, coffee buttercream, and Valrhona chocolate ganache.',
      image:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80' },
    { id:37, cat:'desserts', name:'Cheese Trolley',          price:32,  calories:520, rating:4.8, reviews:89,  badge:'',    allergens:['dairy','gluten','nuts'],     ingredients:['Aged Comté','Brie de Meaux','Roquefort','Quince Jelly','Walnut Bread'], desc:'Selection of fine aged cheeses with quince jelly, walnut bread, grapes, and honey.',
      image:'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80' },
    // DRINKS
    { id:38, cat:'drinks', name:'Dom Pérignon Vintage',      price:48,  calories:95,  rating:5.0, reviews:267, badge:'chef', allergens:[],                           ingredients:['Chardonnay','Pinot Noir','Yeast','Dosage'], desc:'Dom Pérignon Vintage 2015 — fine bubbles, toasty minerality, and impeccable balance.',
      image:'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80' },
    { id:39, cat:'drinks', name:'Royal Mojito',               price:22,  calories:180, rating:4.8, reviews:312, badge:'hot',  allergens:[],                           ingredients:['White Rum','Lime','Mint','Elderflower Syrup','Champagne'], desc:'Premium white rum, fresh lime, mint, elderflower syrup, and a Champagne top.',
      image:'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&q=80' },
    { id:40, cat:'drinks', name:'Truffle Negroni',            price:26,  calories:200, rating:4.8, reviews:143, badge:'new',  allergens:[],                           ingredients:['Truffle Gin','Campari','Sweet Vermouth','Black Truffle','Orange'], desc:'Truffle-infused gin, Campari, sweet vermouth, and a truffle-stuffed olive garnish.',
      image:'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80' },
    { id:41, cat:'drinks', name:'Black Label Whisky',         price:30,  calories:220, rating:4.9, reviews:189, badge:'',    allergens:['gluten'],                   ingredients:['Blended Scotch Whisky','Hand-Carved Ice','Orange Peel'], desc:'Johnnie Walker Black Label on the rocks with a hand-carved ice sphere and orange peel.',
      image:'https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=600&q=80' },
    { id:42, cat:'drinks', name:"Sommelier's Wine Flight",   price:55,  calories:450, rating:4.9, reviews:187, badge:'chef', allergens:[],                           ingredients:['White Wine','Rosé','Red Wine','Tasting Notes Card'], desc:'Curated trio by our sommelier: a white, a rosé, and a red to complement your meal.',
      image:'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80' },
    { id:43, cat:'drinks', name:'Royal Coffee',               price:16,  calories:15,  rating:4.9, reviews:298, badge:'',    allergens:['dairy'],                    ingredients:['Yirgacheffe Beans','Filtered Water','House Chocolates'], desc:'Single-origin Ethiopian Yirgacheffe pour-over, served with petit fours and house chocolates.',
      image:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80' },
    { id:44, cat:'drinks', name:'Cold-Pressed Juice',         price:14,  calories:120, rating:4.7, reviews:134, badge:'vegan',allergens:[],                           ingredients:['Seasonal Fruits','Vegetables','No Sugar Added'], desc:'Daily selection of cold-pressed juices — green goddess, sunrise carrot, or ruby beet.',
      image:'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=600&q=80' },
    { id:45, cat:'drinks', name:'Matcha Ceremonial Latte',    price:12,  calories:140, rating:4.7, reviews:234, badge:'vegan',allergens:['dairy'],                    ingredients:['Ceremonial Matcha','Oat Milk','Honey','Gold Dust'], desc:'Japanese ceremonial grade matcha, oat milk foam, honey, and a gold-dusted surface.',
      image:'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80' },
    { id:46, cat:'drinks', name:'Virgin Royal Spritz',        price:16,  calories:90,  rating:4.8, reviews:112, badge:'new',  allergens:[],                           ingredients:['Elderflower Cordial','Cucumber','Mint','Rose Water','Citrus'], desc:'Alcohol-free sparkling elderflower, cucumber, mint, and citrus with rose water.',
      image:'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80' },
    // KIDS
    { id:47, cat:'kids', name:'Mini Pasta Bolognese',         price:18,  calories:480, rating:4.8, reviews:187, badge:'',    allergens:['gluten','dairy'],           ingredients:['Pasta','Beef Mince','Tomato','Parmesan','Herbs'], desc:'Tender pasta spirals with a mild beef tomato sauce and freshly grated Parmesan.',
      image:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=600&q=80' },
    { id:48, cat:'kids', name:'Chicken Nuggets & Fries',      price:16,  calories:520, rating:4.7, reviews:312, badge:'hot',  allergens:['gluten','egg'],             ingredients:['Chicken','Breadcrumbs','Sweet Potato Fries','Dipping Sauce'], desc:'Tender free-range chicken nuggets with sweet potato fries and homemade dipping sauce.',
      image:'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80' },
    { id:49, cat:'kids', name:'Mini Wagyu Cheeseburger',      price:20,  calories:680, rating:4.9, reviews:256, badge:'',    allergens:['gluten','dairy','egg'],     ingredients:['Wagyu Beef','Cheddar','Brioche','Ketchup','Crinkle Fries'], desc:'Wagyu beef patty, cheddar cheese, baby brioche bun, ketchup, and crinkle fries.',
      image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80' },
    { id:50, cat:'kids', name:'Chocolate Sundae',             price:12,  calories:420, rating:5.0, reviews:389, badge:'hot',  allergens:['dairy','egg'],              ingredients:['Vanilla Ice Cream','Chocolate Sauce','Whipped Cream','Sprinkles'], desc:'Vanilla ice cream, warm chocolate sauce, whipped cream, and rainbow sprinkles.',
      image:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80' },
  ];

  getDishes(category = 'all'): Dish[] {
    return category === 'all' ? this.dishes : this.dishes.filter(d => d.cat === category);
  }
  searchDishes(query: string): Dish[] {
    const q = query.toLowerCase();
    return this.dishes.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.desc.toLowerCase().includes(q) ||
      d.ingredients.some(i => i.toLowerCase().includes(q))
    );
  }
  getDishById(id: number): Dish | undefined {
    return this.dishes.find(d => d.id === id);
  }
}
