import type { Trip } from "../types/trip.type";
import "./TripCard.css";

interface TripCardProps {
  trip: Trip;
  handleDeleteTrip: (tripId: number) => void;
}

export const TripCard = (props: TripCardProps) => {
  const { trip, handleDeleteTrip } = props;
  return (
    <div className="trip-card">
      <img src={trip.image} alt={trip.title} className="trip-image" />
      <div className="trip-content">
        <h3>{trip.title}</h3>
        <p className="destrination">📍 {trip.destination}</p>
        <p className="budget">💰 ${trip.budget}</p>
        <span className="status-badge">{trip.status}</span>
        <button
          className="delete-btn"
          onClick={() => handleDeleteTrip(trip.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
};
