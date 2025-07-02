import type { Product } from "../../models/product.model";
import productsJSON from "../../data/products.json";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  value: Product[];
}

const initialState: ProductsState = {
  value: productsJSON.map(product => ({
    ...product,
    quantity: 0,
    inCart: false,
    price: product.price,
  })),
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, { payload: selectedProduct }: PayloadAction<Product>) {
      for (const product of state.value) {
        if (product.id === selectedProduct.id) {
          product.inCart = true;
          product.quantity = 1;
          break;
        }
      }
    },
    removeFromCart(
      state,
      { payload: selectedProduct }: PayloadAction<Product>
    ) {
      for (const product of state.value) {
        if (product.id === selectedProduct.id) {
          product.inCart = false;
          product.quantity = 0;
          break;
        }
      }
    },
    addProductQuantity(
      state,
      { payload: selectedProduct }: PayloadAction<Product>
    ) {
      for (const product of state.value) {
        if (product.id === selectedProduct.id) {
          product.quantity++;
          break;
        }
      }
    },
    removeProductQuantity(
      state,
      { payload: selectedProduct }: PayloadAction<Product>
    ) {
      for (const product of state.value) {
        if (product.id === selectedProduct.id) {
          product.quantity--;
          break;
        }
      }
    },
    resetCart(state) {
      for (const product of state.value) {
        product.quantity = 0;
        product.inCart = false;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addProductQuantity,
  removeProductQuantity,
  resetCart,
} = productsSlice.actions;

export default productsSlice;
