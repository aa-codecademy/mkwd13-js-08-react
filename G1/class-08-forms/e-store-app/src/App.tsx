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

function App() {
  return (
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
  );
}

export default App;
