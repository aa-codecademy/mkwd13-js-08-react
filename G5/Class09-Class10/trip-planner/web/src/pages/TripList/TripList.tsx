import { useContext, useEffect } from "react";
import "./TripList.css";

import { TripCard } from "../../components/TripCard/TripCard";
import { TripsContext } from "../../context/trips.context";
import { AuthContext, type AuthContextType } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";

export const TripList = () => {
  const context = useContext(TripsContext);
  // EXAMPLE #1 - If user in not autheticated, navigate to login page.
  // const { isAuthenticated } = useContext<AuthContextType>(AuthContext);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   }
  // }, [isAuthenticated]);

  // useEffect(() => {
  //   (async () => {
  //     await context.fetchTrips();
  //   })();
  // }, []);

  if (context.trips.length === 0) {
    return (
      <div>
        <h2>No trips planned yet</h2>
        <p>Start planning your first adventure</p>
      </div>
    );
  }

  console.log(context);
  return (
    <main>
      <div className="trip-list">
        <h1>My Trips {context.trips.length}</h1>
        <div className="trip-grid">
          {context.trips.map((trip) => {
            return (
              <TripCard
                handleDeleteTrip={context.handleDeleteTrip}
                trip={trip}
                key={trip.id}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};
