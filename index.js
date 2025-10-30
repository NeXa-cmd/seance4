






















const produits = [
{ nom: "Thon", prix: 10, expireLe: "2025-12-01" },
{ nom: "Lait", prix: 5, expireLe: "2024-01-01" },
{ nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];
const aujourdHui = new Date();
const valides = produits.filter(p => new Date(p.expireLe) >
aujourdHui);
const total = valides.reduce((s, p) => s + p.prix, 0);
console.log("Produits valides :", valides);
console.log("Total :", total, "DH");