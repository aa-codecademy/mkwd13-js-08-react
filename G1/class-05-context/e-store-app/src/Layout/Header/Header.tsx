import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <h1>
        <Link to="/">E Store App</Link>
      </h1>
      <Navbar />
    </header>
  );
}

export default Header;
