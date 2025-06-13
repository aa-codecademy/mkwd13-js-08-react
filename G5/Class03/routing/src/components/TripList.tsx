import type { Trip } from "../types/trip.type";
import { TripCard } from "./TripCard";
import "./TripList.css";

interface TripListProps {
  trips: Trip[];
  handleDeleteTrip: (tripId: number) => void;
}

export const TripList = (props: TripListProps) => {
  const { trips, handleDeleteTrip } = props;

  if (trips.length === 0) {
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
        <h1>My Trips {trips.length}</h1>
        <div className="trip-grid">
          {trips.map((trip) => {
            return (
              <TripCard
                handleDeleteTrip={handleDeleteTrip}
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
