import type { Product } from "../../models/product.model";
import {
  createAsyncThunk,
  createSlice,
  type ActionReducerMapBuilder,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { httpService } from "../../services/http.service";

interface ProductsState {
  value: Product[];
  isLoading: boolean;
}

const initialState: ProductsState = {
  isLoading: false,
  value: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  //The return of the function below is going to be the action payload on fulfilled
  async () => {
    const { data } = await httpService.get("/products");

    const products: Product[] = data.map((product: Product) => ({
      ...product,
      inCart: false,
      quantity: 0,
      price: Number(product.price),
    }));

    return products;
  }
);

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
    setupLocalStorageCart(
      state,
      { payload: cartProducts }: PayloadAction<Product[]>
    ) {
      cartProducts.forEach(cartProduct => {
        for (const product of state.value) {
          if (cartProduct.id === product.id) {
            product.inCart = cartProduct.inCart;
            product.quantity = cartProduct.quantity;
            break;
          }
        }
      });
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<ProductsState>) => {
    builder.addCase(fetchProducts.pending, state => {
      state.isLoading = true;
      console.log("pending reducer called");
    });
    //The action payload in the fulfilled case is the data returned from the async function in the thunk definition
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
      console.log("success");
    });
    builder.addCase(fetchProducts.rejected, state => {
      state.isLoading = false;
      console.log("something went wrong");
    });
  },
});

export const {
  addToCart,
  removeFromCart,
  addProductQuantity,
  removeProductQuantity,
  resetCart,
  setupLocalStorageCart,
} = productsSlice.actions;

export default productsSlice;
