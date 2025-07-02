import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export const selectProductsInCart = createSelector(
  [(state: RootState) => state.products.value],
  products => products.filter(product => product.inCart)
);

export const selectTotalAmount = (state: RootState) =>
  selectProductsInCart(state).reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );
