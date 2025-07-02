import { useContext } from "react";
import { type TripCreationProps } from "../../types/trip.type";
import { useNavigate } from "react-router-dom";
import { TripsContext } from "../../context/trips.context";
import "./AddTrip.css";
import { useForm } from "react-hook-form";

export const AddTripV2 = () => {
  const navigate = useNavigate();
  const context = useContext(TripsContext);
  const { handleAddTrip } = context;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TripCreationProps>({
    // validation will start on change
    mode: "onChange",
  });

  const handleCreate = (data: TripCreationProps) => {
    handleAddTrip(data);
    navigate("/trips");
  };

  return (
    <form
      className="create-trip-form"
      onSubmit={handleSubmit((data) => {
        handleCreate(data);
      })}
    >
      {/* Title */}
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 2,
              message: "Title should be at least 2 charactes",
            },
          })}
        />
        {errors.title && (
          <span className="error-massage">{errors.title.message}</span>
        )}
      </div>
      {/* Destination */}
      <div className="form-group">
        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          id="destination"
          {...register("destination", {
            required: "Destination is required",
            minLength: {
              value: 2,
              message: "Destination should be at least 2 charactes",
            },
          })}
        />
        {errors.destination && (
          <span className="error-massage">{errors.destination.message}</span>
        )}
      </div>

      {/* Budget */}
      <div className="form-group">
        <label htmlFor="budget">Budget</label>
        <input
          type="text"
          id="budget"
          {...register("budget", {
            required: "Budget is required",
            min: {
              value: 1,
              message: "Budget must be positive number",
            },
          })}
        />
        {errors.budget && (
          <span className="error-massage">{errors.budget.message}</span>
        )}
      </div>

      {/* Image */}
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          {...register("image", {
            required: "Image is required",
            minLength: {
              value: 2,
              message: "Image should be at least 2 charactes in the url",
            },
          })}
        />
        {errors.image && (
          <span className="error-massage">{errors.image.message}</span>
        )}
      </div>

      <button>Create</button>
    </form>
  );
};
