import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./Contexts/ProductsContext.tsx";
import { Provider } from "react-redux";
import store from "./state/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Must wrap App with browser routeр to enable react-router components to work in the application */}
    <ProductsProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ProductsProvider>
  </StrictMode>
);
