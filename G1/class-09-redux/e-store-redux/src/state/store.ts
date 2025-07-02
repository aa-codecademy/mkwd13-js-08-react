import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products.slice";
import { saveCartInLocalStorage } from "../services/data.service";
import { selectProductsInCart } from "./selectors";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

store.subscribe(() => {
  console.log("subsricbe callback");

  const cartProducts = selectProductsInCart(store.getState());

  if (cartProducts.length) saveCartInLocalStorage(cartProducts);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
