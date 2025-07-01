import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <div>
        <h1>Welcome to Trip Planner</h1>
        <p>Plan your perfect adventures with our simple trip planning tool.</p>
        <div>
          <Link to={"/trips"}>View my trips</Link>
          <Link to={"/add-trip"}>Plan new trip</Link>
        </div>
      </div>
    </main>
  );
};
