import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import type { NavLink } from "./models/core.model";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";

function App() {
  const navbarLinksData: NavLink[] = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/products",
      text: "Products",
    },
    {
      path: "/contact",
      text: "Contact",
    },
  ];

  return (
    <div className="App">
      <Header title="E-Store App" linkData={navbarLinksData} />
      <main>
        <ProductsPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
