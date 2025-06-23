import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/with-fetch"}>With Fetch</Link>
        </li>
        <li>
          <Link to={"/with-axios"}>With Axios</Link>
        </li>
      </ul>
    </nav>
  );
};
