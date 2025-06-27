import { useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateTrip.css";

export const UpdateTrip = () => {
  const params = useParams();
  const { id } = params;

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

  // TODO: Get trip by id with this ID
  // TODO: Prepopulate the form with the values
  return (
    <form
      className="create-trip-form"
      onSubmit={(event) => {
        event.preventDefault();
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

      <button>Update</button>
    </form>
  );
};
