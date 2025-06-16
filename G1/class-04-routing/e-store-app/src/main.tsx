import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Must wrap App with browser routeр to enable react-router components to work in the application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
