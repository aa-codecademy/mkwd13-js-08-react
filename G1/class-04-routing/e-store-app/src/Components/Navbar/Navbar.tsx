import "./Navbar.css";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  cartCount: number;
}

function Navbar({ cartCount }: NavbarProps) {
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
