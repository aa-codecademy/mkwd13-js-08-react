import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Header.css";

interface HeaderProps {
  cartCount: number;
}

function Header({ cartCount }: HeaderProps) {
  return (
    <header className="Header">
      <h1>
        <Link to="/">E Store App</Link>
      </h1>
      <Navbar cartCount={cartCount} />
    </header>
  );
}

export default Header;
