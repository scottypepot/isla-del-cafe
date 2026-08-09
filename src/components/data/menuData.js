// Central data source for the Menu page.
//
// `tag` links a drink back to its Favorites category (espresso / matcha / milk)
// so clicking a Favorites card can deep-link into a pre-filtered view.
//
// `ingredients` is a first-pass guess based on each item's name — these are
// NOT verified recipes. Please review/correct every list below, especially
// for allergen accuracy, before this goes live.

import caramelLatte from "../../assets/menu-items/caramel-latte.jpg";
import whiteMocha from "../../assets/menu-items/white-mocha.jpg";
import spanishLatte from "../../assets/menu-items/Spanish-latte.jpg";
import javaChips from "../../assets/menu-items/java-chips.jpg";
import merryMatcha from "../../assets/menu-items/merry-matcha.jpg";
import strawberryMatcha from "../../assets/menu-items/strawberry-matcha.jpg";
import darkCocaMilk from "../../assets/menu-items/dark-coca-milk.jpg";
import strawberryMilk from "../../assets/menu-items/strawberry-milk.jpg";
import ubeTaroMilk from "../../assets/menu-items/ube-taro-milk.jpg";
import pinkLychee from "../../assets/menu-items/pink-lychee.jpg";
import purpleLemonade from "../../assets/menu-items/purple-lemonade.jpg";

export const categories = [
  { id: "all", label: "ALL", navLabel: "All" },
  { id: "drinks", label: "Drinks", navLabel: "Drinks" },
  { id: "snacks", label: "Snacks", navLabel: "Snacks" },
  { id: "others", label: "Others", navLabel: "Others" },
];

export const drinkTags = [
  { id: "espresso", label: "Espresso Based" },
  { id: "matcha", label: "Matcha Series" },
  { id: "milk", label: "Milk Based" },
];

export const menuItems = [
  // ---- Drinks ----
  {
    id: "caramel-latte",
    name: "Caramel latte",
    category: "drinks",
    tag: "espresso",
    image: caramelLatte,
    ingredients: [
      "Espresso",
      "Steamed Milk",
      "Caramel Syrup",
      "Caramel Drizzle",
    ],
  },
  {
    id: "white-mocha",
    name: "White mocha",
    category: "drinks",
    tag: "espresso",
    image: whiteMocha,
    ingredients: [
      "Espresso",
      "White Chocolate Sauce",
      "Steamed Milk",
      "Whipped Cream",
    ],
  },
  {
    id: "spanish-latte",
    name: "Spanish latte",
    category: "drinks",
    tag: "espresso",
    image: spanishLatte,
    ingredients: ["Espresso", "Condensed Milk", "Fresh Milk", "Ice"],
  },
  {
    id: "java-chips",
    name: "Java Chips",
    category: "drinks",
    tag: "espresso",
    image: javaChips,
    ingredients: [
      "Espresso",
      "Milk",
      "Chocolate Chips",
      "Coffee Jelly",
      "Whipped Cream",
    ],
  },

  {
    id: "merry-matcha",
    name: "Merry Matcha",
    category: "drinks",
    tag: "matcha",
    image: merryMatcha,
    ingredients: ["Matcha Powder", "Fresh Milk", "Ice"],
  },
  {
    id: "strawberry-matcha",
    name: "Strawberry Matcha",
    category: "drinks",
    tag: "matcha",
    image: strawberryMatcha,
    ingredients: ["Matcha Powder", "Strawberry Syrup", "Fresh Milk", "Ice"],
  },

  {
    id: "dark-coca-milk",
    name: "Dark Coca Milk",
    category: "drinks",
    tag: "milk",
    image: darkCocaMilk,
    ingredients: ["Dark Chocolate Syrup", "Cocoa Powder", "Fresh Milk", "Ice"],
  },
  {
    id: "strawberry-milk",
    name: "Strawberry Milk",
    category: "drinks",
    tag: "milk",
    image: strawberryMilk,
    ingredients: ["Strawberry Syrup", "Fresh Milk", "Ice"],
  },
  {
    id: "ube-taro-milk",
    name: "Ube Taro Milk",
    category: "drinks",
    tag: "milk",
    image: ubeTaroMilk,
    ingredients: ["Ube Syrup", "Taro Powder", "Fresh Milk", "Ice"],
  },

  // Not part of the 3 Favorites categories — still visible under "Drinks" / "All"
  {
    id: "pink-lychee",
    name: "Pink Lychee",
    category: "drinks",
    tag: null,
    image: pinkLychee,
    ingredients: ["Lychee Syrup", "Lychee Fruit", "Iced Tea Base", "Ice"],
  },
  {
    id: "purple-lemonade",
    name: "Purple Lemonade",
    category: "drinks",
    tag: null,
    image: purpleLemonade,
    ingredients: ["Butterfly Pea Flower", "Lemon Juice", "Simple Syrup", "Ice"],
  },

  // ---- Snacks ----
  {
    id: "brownies",
    name: "Brownies",
    category: "snacks",
    tag: null,
    image: null, // no file in menu-items yet
    ingredients: [
      "Dark Chocolate",
      "Butter",
      "Sugar",
      "Eggs",
      "Flour",
      "Cocoa Powder",
    ],
  },
  {
    id: "cookies",
    name: "Cookies",
    category: "snacks",
    tag: null,
    image: null, // no file in menu-items yet
    ingredients: [
      "Butter",
      "Brown Sugar",
      "Flour",
      "Chocolate Chips",
      "Vanilla",
    ],
  },
  {
    id: "muffin",
    name: "Muffin",
    category: "snacks",
    tag: null,
    image: null, // no file in menu-items yet
    ingredients: ["Flour", "Sugar", "Eggs", "Butter", "Baking Powder"],
  },

  // ---- Others ----
  // No items in the Figma yet — add them here once you have them.
];
