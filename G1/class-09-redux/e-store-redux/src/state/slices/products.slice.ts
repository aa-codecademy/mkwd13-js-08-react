import type { Product } from "../../models/product.model";
import productsJSON from "../../data/products.json";
import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  value: Product[];
}

const initialState: ProductsState = {
  value: productsJSON.map(product => ({
    ...product,
    quantity: 0,
    inCart: false,
    price: Number(product.price),
  })),
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice;
