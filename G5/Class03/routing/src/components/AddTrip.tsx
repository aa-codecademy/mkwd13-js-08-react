import { useState } from "react";
import { TripStatus, type Trip } from "../types/trip.type";
import { useNavigate } from "react-router-dom";

interface AddTripProps {
  handleAddTrip: (trip: Trip) => void;
}

export const AddTrip = (props: AddTripProps) => {
  const navigate = useNavigate();
  const { handleAddTrip } = props;

  const [title, setTitle] = useState("");
  const [destination, setDestination] = useState("");
  const [budget, setBudget] = useState("");
  const [image, setImage] = useState("");

  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };

  const handleChangeDestination = (value: string) => {
    setDestination(value);
  };

  const handleChangeBudget = (value: string) => {
    setBudget(value);
  };

  const handleChangeImage = (value: string) => {
    setImage(value);
  };

  const handleCreate = () => {
    // TODO: Validate the user input
    const newTrip: Trip = {
      id: Date.now(),
      title: title,
      destination: destination,
      budget: +budget,
      status: TripStatus.PLANNED,
      image: image,
    };

    console.log(newTrip);
    handleAddTrip(newTrip);
    navigate("/trips");
  };

  return (
    <main>
      {/* Title */}
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(event) => {
            const value = event.target.value;
            handleChangeTitle(value);
          }}
        />
      </div>
      {/* Destination */}
      <div className="form-group">
        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          id="destination"
          name="destination"
          onChange={(event) => {
            const value = event.target.value;
            handleChangeDestination(value);
          }}
        />
      </div>

      {/* Budget */}
      <div className="form-group">
        <label htmlFor="budget">Budget</label>
        <input
          type="text"
          id="budget"
          onChange={(event) => {
            const value = event.target.value;
            handleChangeBudget(value);
          }}
        />
      </div>

      {/* Image */}
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={(event) => {
            const value = event.target.value;
            handleChangeImage(value);
          }}
        />
      </div>

      <button onClick={handleCreate}>Create</button>
    </main>
  );
};
