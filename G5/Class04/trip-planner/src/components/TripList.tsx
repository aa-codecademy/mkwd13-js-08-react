import { useContext } from "react";
import { TripCard } from "./TripCard";
import "./TripList.css";
import { TripsContext } from "../context/trips.context";

export const TripList = () => {
  const context = useContext(TripsContext);

  if (context.trips.length === 0) {
    return (
      <div>
        <h2>No trips planned yet</h2>
        <p>Start planning your first adventure</p>
      </div>
    );
  }

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
