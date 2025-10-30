import { PRODUCTS } from "./data/products.js";
import { isExpired } from "./utils/date.js";

console.log("=== ÉTAPE 2 : Afficher la liste des produits ===");
PRODUCTS.forEach((p) => console.log(p));

console.log("\n=== ÉTAPE 3 : Afficher uniquement le nom de chaque produit ===");
PRODUCTS.forEach((p) => console.log(p.name));

console.log("\n=== ÉTAPE 4 : Filtrer les produits expirés ===");
const expired = PRODUCTS.filter(p => isExpired(p.expiryDate));
console.log("Produits expirés :", expired);

console.log("\n=== ÉTAPE 5 : Calculer la valeur totale du stock ===");
const total = PRODUCTS.reduce(
  (somme, p) => somme + p.price * p.quantity,
  0
);
console.log("Valeur totale du stock :", total, "MAD");

console.log("\n=== ÉTAPE 6 : Filtrer et trier les produits ===");
const promo = PRODUCTS.filter(p => p.tags.includes("promo"));
console.log("Produits en promo :", promo.map(p => p.name));

const sorted = [...PRODUCTS].sort((a, b) => a.price - b.price);
console.log("Tri par prix croissant :", sorted.map(p => p.name));

console.log("\n=== ÉTAPE 7 : Ajouter un nouveau produit ===");
const delay = (ms) => new Promise(res => setTimeout(res, ms));

const addProduct = async (list, newP) => {
  await delay(300);
  const id = Math.max(...list.map(p => p.id)) + 1;
  return [...list, { id, ...newP }];
};

const newList = await addProduct(PRODUCTS, {
  name: "Savon",
  category: "Hygiène",
  price: 5,
  currency: "MAD",
  quantity: 10,
  expiryDate: "2026-01-01",
  tags: ["hygiene"]
});

console.log("Après ajout :", newList.length, "produits");
console.log("Nouveau produit ajouté :", newList[newList.length - 1]);