import { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../../Contexts/ProductsContext";

function Navbar() {
  const { getProductsInCart } = useContext(ProductsContext);

  const cartCount = getProductsInCart().length;

  return (
    <nav className="Navbar">
      <ul>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart {cartCount > 0 && cartCount}</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
