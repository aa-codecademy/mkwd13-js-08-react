import type { Trip } from "../types/trip.type";
import "./TripCard.css";
import { useNavigate } from "react-router-dom";

interface TripCardProps {
  trip: Trip;
  handleDeleteTrip: (tripId: string) => void;
}

export const TripCard = (props: TripCardProps) => {
  const { trip, handleDeleteTrip } = props;
  const navigate = useNavigate();

  return (
    <div className="trip-card">
      <img src={trip.image} alt={trip.title} className="trip-image" />
      <div className="trip-content">
        <h3>{trip.title}</h3>
        <p className="destrination">📍 {trip.destination}</p>
        <p className="budget">💰 ${trip.budget}</p>
        <span className="status-badge">{trip.status}</span>
        <div className="btn-actions">
          <button
            className="edit-btn"
            onClick={() => {
              navigate(`/update-trip/${trip.id}`);
            }}
          >
            ✏️
          </button>
          <button
            className="delete-btn"
            onClick={() => handleDeleteTrip(trip.id)}
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
};
