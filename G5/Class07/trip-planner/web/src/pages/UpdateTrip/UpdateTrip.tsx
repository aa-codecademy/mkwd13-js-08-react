import { useNavigate, useParams } from "react-router-dom";
import "./UpdateTrip.css";
import { useForm } from "react-hook-form";
import type { UpdateTripProps } from "../../types/trip.type";
import { TripService } from "../../services/trip.service";
import { useContext, useEffect } from "react";
import { TripsContext } from "../../context/trips.context";

export const UpdateTrip = () => {
  const { handleUpdateTrip } = useContext(TripsContext);
  const navigate = useNavigate();

  const params = useParams();
  const { id } = params;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateTripProps>();

  const submit = async (data: UpdateTripProps) => {
    if (!id) return;
    await handleUpdateTrip(id, data);
    navigate("/trips");
  };

  // Load trip data and popule the form
  useEffect(() => {
    const loadTrip = async () => {
      if (!id) return;

      const trip = await TripService.getTripById(id);

      reset({
        title: trip.title,
        destination: trip.destination,
        budget: trip.budget,
        image: trip.image,
        status: trip.status,
      });
    };

    loadTrip();
  }, []);

  return (
    <form
      className="create-trip-form"
      // handleSubmit from useForm can get 2 arguments
      // 1st => callback that executes if the form is valid
      // 2nd => callback that executes if the form is invalid
      onSubmit={handleSubmit((data) => {
        submit(data);
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
              message: "Title must be at least 2 characters",
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
              value: 5,
              message: "Destination must have at least 2 characters",
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
            required: "Budget must be positive number",
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
          })}
        />
        {errors.image && (
          <span className="error-massage">{errors.image.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select {...register("status")}>
          <option value="planned">Planned</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <button>Update</button>
    </form>
  );
};
