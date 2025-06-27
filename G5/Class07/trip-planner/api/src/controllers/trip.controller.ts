import { Request, Response } from "express";
import { TripModel } from "../models/Trip.model";
import { CreateTripDTO, UpdateTripDTO, TripStatus } from "../types/trip.types";

export class TripController {
  // GET /api/trips - Get all trips
  static async getAllTrips(req: Request, res: Response) {
    try {
      const trips = await TripModel.find().sort({ createdAt: -1 });
      res.json(trips);
    } catch (error) {
      console.error("Error fetching trips:", error);
      res.status(500).json({ error: "Failed to fetch trips" });
    }
  }

  // GET /api/trips/:id - Get trip by ID
  static async getTripById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const trip = await TripModel.findById(id);

      if (!trip) {
        return res.status(404).json({ error: "Trip not found" });
      }

      res.json(trip);
    } catch (error) {
      console.error("Error fetching trip:", error);
      res.status(500).json({ error: "Failed to fetch trip" });
    }
  }

  // POST /api/trips - Create new trip
  static async createTrip(req: Request, res: Response) {
    try {
      const tripData: CreateTripDTO = req.body;

      // Validate required fields
      // TODO: It is better the BE to return which field is invalid
      if (
        !tripData.title ||
        !tripData.destination ||
        !tripData.budget ||
        !tripData.image
      ) {
        return res.status(400).json({
          error: "Missing required fields: title, destination, budget, image",
        });
      }

      const newTrip = new TripModel({
        ...tripData,
        status: TripStatus.PLANNED,
      });

      const savedTrip = await newTrip.save();
      res.status(201).json(savedTrip);
    } catch (error) {
      console.error("Error creating trip:", error);
      res.status(500).json({ error: "Failed to create trip" });
    }
  }

  // PUT /api/trips/:id - Update trip
  static async updateTrip(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updateData: UpdateTripDTO = req.body;

      const updatedTrip = await TripModel.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
      });

      if (!updatedTrip) {
        return res.status(404).json({ error: "Trip not found" });
      }

      res.json(updatedTrip);
    } catch (error) {
      console.error("Error updating trip:", error);
      res.status(500).json({ error: "Failed to update trip" });
    }
  }

  // DELETE /api/trips/:id - Delete trip
  static async deleteTrip(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedTrip = await TripModel.findByIdAndDelete(id);

      if (!deletedTrip) {
        return res.status(404).json({ error: "Trip not found" });
      }

      res.json({ message: "Trip deleted successfully" });
    } catch (error) {
      console.error("Error deleting trip:", error);
      res.status(500).json({ error: "Failed to delete trip" });
    }
  }
}
