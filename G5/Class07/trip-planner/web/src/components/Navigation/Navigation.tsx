import "./Navigation.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h2>Trip Planner</h2>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/trips">My Trips</Link>
        </li>
        <li>
          <Link to="/add-trip">Add Trip</Link>
        </li>
      </ul>
    </nav>
  );
};
