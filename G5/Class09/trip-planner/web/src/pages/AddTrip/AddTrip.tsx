import { useState, useContext } from "react";
import { type TripCreationProps } from "../../types/trip.type";
import { useNavigate } from "react-router-dom";
import { TripsContext } from "../../context/trips.context";
import "./AddTrip.css";

export const AddTrip = () => {
  const navigate = useNavigate();
  const context = useContext(TripsContext);
  const { handleAddTrip } = context;

  const [formData, setFormData] = useState({
    title: "",
    destination: "",
    budget: "",
    image: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value, // if name === title => title: value
    });
  };

  const handleCreate = () => {
    const formDataValues = Object.values(formData);
    const condition = formDataValues.every((val) => val);
    if (!condition) {
      alert("Please fill all inputs");
      return;
    }

    const newTrip: TripCreationProps = {
      title: formData.title,
      destination: formData.destination,
      budget: +formData.budget,
      image: formData.image,
    };

    console.log(newTrip);
    handleAddTrip(newTrip);
    navigate("/trips");
  };

  return (
    <form
      className="create-trip-form"
      onSubmit={(event) => {
        event.preventDefault();
        handleCreate();
      }}
    >
      {/* Title */}
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(event) => {
            const value = event.target.value;
            const name = event.target.name;
            handleInputChange(name, value);
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
            const name = event.target.name;
            handleInputChange(name, value);
          }}
        />
      </div>

      {/* Budget */}
      <div className="form-group">
        <label htmlFor="budget">Budget</label>
        <input
          type="text"
          id="budget"
          name="budget"
          onChange={(event) => {
            const value = event.target.value;
            const name = event.target.name;
            handleInputChange(name, value);
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
            const name = event.target.name;
            handleInputChange(name, value);
          }}
        />
      </div>

      <button>Create</button>
    </form>
  );
};
