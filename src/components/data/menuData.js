// Central data source for the Menu page.
// `image` is left null on every item — drop in the real photo/icon path
// (e.g. from src/assets/menu/...) when images are ready to import.

export const categories = [
  { id: "all", label: "ALL", navLabel: "All" },
  { id: "drinks", label: "Drinks", navLabel: "Drinks" },
  { id: "snacks", label: "Snacks", navLabel: "Snacks" },
  { id: "others", label: "Others", navLabel: "Others" },
];

export const menuItems = [
  // ---- Drinks ----
  {
    id: "caramel-latte",
    name: "Caramel latte",
    category: "drinks",
    image: null,
  },
  { id: "white-mocha", name: "White mocha", category: "drinks", image: null },
  {
    id: "spanish-latte",
    name: "Spanish latte",
    category: "drinks",
    image: null,
  },
  { id: "java-chips", name: "Java Chips", category: "drinks", image: null },
  {
    id: "dark-coca-milk",
    name: "Dark Coca Milk",
    category: "drinks",
    image: null,
  },
  { id: "merry-matcha", name: "Merry Matcha", category: "drinks", image: null },
  {
    id: "strawberry-matcha",
    name: "Strawberry Matcha",
    category: "drinks",
    image: null,
  },
  {
    id: "strawberry-milk",
    name: "Strawberry Milk",
    category: "drinks",
    image: null,
  },
  { id: "pink-lychee", name: "Pink Lychee", category: "drinks", image: null },
  {
    id: "ube-taro-milk",
    name: "Ube Taro Milk",
    category: "drinks",
    image: null,
  },
  {
    id: "purple-lemonade",
    name: "Purple Lemonade",
    category: "drinks",
    image: null,
  },
  { id: "cafe-latte", name: "Cafe Latte", category: "drinks", image: null },

  // ---- Snacks ----
  { id: "brownies", name: "Brownies", category: "snacks", image: null },
  { id: "cookies", name: "Cookies", category: "snacks", image: null },
  { id: "muffin", name: "Muffin", category: "snacks", image: null },

  // ---- Others ----
  // No items in the Figma yet — add them here once you have them.
];
