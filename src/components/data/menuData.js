// Central data source for the Menu page.
// `image` is left null on every item — drop in the real photo/icon path
// (e.g. from src/assets/menu/...) when images are ready to import.
//
// `tag` links a drink back to its Favorites category (espresso / matcha / milk)
// so clicking a Favorites card can deep-link into a pre-filtered view.
// I matched these by name — please double check the groupings below and
// correct any that don't reflect your actual recipes.

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
    image: null,
  },
  {
    id: "white-mocha",
    name: "White mocha",
    category: "drinks",
    tag: "espresso",
    image: null,
  },
  {
    id: "spanish-latte",
    name: "Spanish latte",
    category: "drinks",
    tag: "espresso",
    image: null,
  },
  {
    id: "java-chips",
    name: "Java Chips",
    category: "drinks",
    tag: "espresso",
    image: null,
  },
  {
    id: "cafe-latte",
    name: "Cafe Latte",
    category: "drinks",
    tag: "espresso",
    image: null,
  },

  {
    id: "merry-matcha",
    name: "Merry Matcha",
    category: "drinks",
    tag: "matcha",
    image: null,
  },
  {
    id: "strawberry-matcha",
    name: "Strawberry Matcha",
    category: "drinks",
    tag: "matcha",
    image: null,
  },

  {
    id: "dark-coca-milk",
    name: "Dark Coca Milk",
    category: "drinks",
    tag: "milk",
    image: null,
  },
  {
    id: "strawberry-milk",
    name: "Strawberry Milk",
    category: "drinks",
    tag: "milk",
    image: null,
  },
  {
    id: "ube-taro-milk",
    name: "Ube Taro Milk",
    category: "drinks",
    tag: "milk",
    image: null,
  },

  // Not part of the 3 Favorites categories — still visible under "Drinks" / "All"
  {
    id: "pink-lychee",
    name: "Pink Lychee",
    category: "drinks",
    tag: null,
    image: null,
  },
  {
    id: "purple-lemonade",
    name: "Purple Lemonade",
    category: "drinks",
    tag: null,
    image: null,
  },

  // ---- Snacks ----
  {
    id: "brownies",
    name: "Brownies",
    category: "snacks",
    tag: null,
    image: null,
  },
  {
    id: "cookies",
    name: "Cookies",
    category: "snacks",
    tag: null,
    image: null,
  },
  { id: "muffin", name: "Muffin", category: "snacks", tag: null, image: null },

  // ---- Others ----
  // No items in the Figma yet — add them here once you have them.
];
