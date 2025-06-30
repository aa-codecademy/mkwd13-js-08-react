import { useContext } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { AuthContext, type AuthContextType } from "../../context/auth.context";

const routes = [
  { path: "/", label: "Home" },
  { path: "/trips", label: "My Trips" },
  { path: "/add-trip", label: "Add Trip" },
];

export const Navigation = () => {
  const { isAuthenticated, user, logout } =
    useContext<AuthContextType>(AuthContext);

  console.log("Navigation bar", user);

  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h2>Trip Planner</h2>
      </div>

      {isAuthenticated ? (
        <ul className="nav-links">
          {routes.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.label}</Link>{" "}
            </li>
          ))}

          <div className="nav-user">
            <span>Welcome, {user?.name} </span>
            <button onClick={logout}>Logout</button>
          </div>
        </ul>
      ) : (
        <ul className="nav-links">
          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
