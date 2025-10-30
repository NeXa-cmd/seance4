// Variables & portée : on utilise const pour un tableau non réassigné,
// mais on peut modifier son contenu (push, etc.)
export const PRODUCTS = [
  {
    id: 1,
    name: "Lait UHT",
    category: "Alimentaire",
    price: 12.5,
    currency: "MAD",
    quantity: 20,
    expiryDate: "2025-10-20",
    tags: ["frais", "lactose"]
  },
  {
    id: 2,
    name: "Yaourt Nature",
    category: "Alimentaire",
    price: 3.9,
    currency: "MAD",
    quantity: 50,
    expiryDate: "2025-10-05",
    tags: ["frais", "lactose", "promo"]
  },
  {
    id: 3,
    name: "Shampoing",
    category: "Hygiène",
    price: 25,
    currency: "MAD",
    quantity: 15,
    expiryDate: "2026-02-01",
    tags: ["hygiene"]
  },
  {
    id: 4,
    name: "Biscuit Choco",
    category: "Alimentaire",
    price: 9.5,
    currency: "MAD",
    quantity: 0,
    expiryDate: "2025-12-31",
    tags: ["sucré"]
  }
];