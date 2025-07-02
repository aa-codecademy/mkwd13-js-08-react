import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CartPage from "./Pages/CartPage/CartPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import { CheckoutPage } from "./Pages/CheckoutPage/CheckoutPage";
import { AddProductPage } from "./Pages/AddProductPage/AddProductPage";
import { useAppDispatch, useAppSelector } from "./utils/hooks";
import { useEffect } from "react";
import {
  fetchProducts,
  setupLocalStorageCart,
} from "./state/slices/products.slice";
import { ToastContainer } from "react-toastify";
import { Spinner } from "./Components/Spinner/Spinner";
import { loadCartFromLocalStorage } from "./services/data.service";

function App() {
  const dispatch = useAppDispatch();

  const products = useAppSelector(state => state.products.value);

  const isLoading = useAppSelector(state => state.products.isLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!products.length) return;
    console.log("use effect for products called", products);

    const cartProducts = loadCartFromLocalStorage();

    console.log("CART PRODUCTS", cartProducts);

    dispatch(setupLocalStorageCart(cartProducts));
  }, [products, dispatch]);

  return (
    <>
      {isLoading && <Spinner />}
      <ToastContainer position="bottom-right" />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
