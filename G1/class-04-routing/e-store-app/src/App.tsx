import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Layout/Footer/Footer";

import Header from "./Layout/Header/Header";
import CartPage from "./Pages/CartPage/CartPage";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import productsJSON from "./data/products.json";
import { useState } from "react";
import type { Product } from "./models/product.model";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";

function App() {
  //Use state always returns an array where the first element is the state variable and thes second element is the setter function that allows us to change the state variable, the reason why this is an array is because arrays allow us to name their elements anything we like when we destructure them
  const [products, setProducts] = useState<Product[]>(productsJSON);

  const addToCart = (selectedProduct: Product) => {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (selectedProduct.id === product.id) {
          product.inCart = true;
          return product;
        }
        return product;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route
            path="/products"
            element={<ProductsPage products={products} addToCart={addToCart} />}
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetailsPage products={products} addToCart={addToCart} />
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
