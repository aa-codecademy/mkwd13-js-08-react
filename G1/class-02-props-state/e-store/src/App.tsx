import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import type { NavLink } from "./models/core.model";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";

function App() {
  const appTitle = "E-Store App";

  const linkData: NavLink[] = [
    {
      text: "Home",
      path: "/home",
    },
    {
      text: "About Us",
      path: "/about-us",
    },
    {
      text: "Products",
      path: "/product",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="App">
      <Header title={appTitle} linkData={linkData} />
      <main>
        <ProductsPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
