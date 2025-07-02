import type { Product } from "../models/product.model";

export const saveCartInLocalStorage = (cartProducts: Product[]) => {
  const cartJSON = JSON.stringify(cartProducts);

  localStorage.setItem("cart", cartJSON);
};

export const loadCartFromLocalStorage = (): Product[] => {
  const cartJSON = localStorage.getItem("cart");

  if (!cartJSON) return [];

  return JSON.parse(cartJSON);
};
