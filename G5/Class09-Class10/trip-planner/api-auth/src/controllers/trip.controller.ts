import { Request, Response } from 'express';
import { TripModel } from '../models/Trip.model';
import { CreateTripDTO, UpdateTripDTO, TripStatus } from '../types/trip.types';
import { AuthenticatedRequest } from '../middleware/auth.middleware';

export class TripController {
  // GET /api/trips - Get all trips for the authenticated user
  static async getAllTrips(req: AuthenticatedRequest, res: Response) {
    try {
      

      const trips = await TripModel.find({ creatorId: req.user.userId }).sort({ createdAt: -1 });
      res.json(trips);
    } catch (error) {
      console.error('Error fetching trips:', error);
      res.status(500).json({ error: 'Failed to fetch trips' });
    }
  }

  // GET /api/trips/:id - Get trip by ID
  static async getTripById(req: AuthenticatedRequest, res: Response) {
    try {
     

      const { id } = req.params;
      const trip = await TripModel.findOne({ _id: id, creatorId: req.user.userId });
      
      if (!trip) {
        return res.status(404).json({ error: 'Trip not found' });
      }
      
      res.json(trip);
    } catch (error) {
      console.error('Error fetching trip:', error);
      res.status(500).json({ error: 'Failed to fetch trip' });
    }
  }

  // POST /api/trips - Create new trip
  static async createTrip(req: AuthenticatedRequest, res: Response) {
    try {
    

      const tripData: CreateTripDTO = req.body;
      
      // Validate required fields
      if (!tripData.title || !tripData.destination || !tripData.budget || !tripData.image) {
        return res.status(400).json({ 
          error: 'Missing required fields: title, destination, budget, image' 
        });
      }

      const newTrip = new TripModel({
        ...tripData,
        creatorId: req.user.userId, // Extract creatorId from authenticated user
        status: TripStatus.PLANNED
      });

      const savedTrip = await newTrip.save();
      res.status(201).json(savedTrip);
    } catch (error) {
      console.error('Error creating trip:', error);
      res.status(500).json({ error: 'Failed to create trip' });
    }
  }

  // PUT /api/trips/:id - Update trip
  static async updateTrip(req: AuthenticatedRequest, res: Response) {
    try {
   

      const { id } = req.params;
      const updateData: UpdateTripDTO = req.body;

      // Find trip and ensure it belongs to the authenticated user
      const trip = await TripModel.findOne({ _id: id, creatorId: req.user.userId });
      if (!trip) {
        return res.status(404).json({ error: 'Trip not found' });
      }

      const updatedTrip = await TripModel.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
      );

      res.json(updatedTrip);
    } catch (error) {
      console.error('Error updating trip:', error);
      res.status(500).json({ error: 'Failed to update trip' });
    }
  }

  // DELETE /api/trips/:id - Delete trip
  static async deleteTrip(req: AuthenticatedRequest, res: Response) {
    try {
           const { id } = req.params;
      
      // Find trip and ensure it belongs to the authenticated user before deleting
      const trip = await TripModel.findOne({ _id: id, creatorId: req.user.userId });
      if (!trip) {
        return res.status(404).json({ error: 'Trip not found' });
      }

      const deletedTrip = await TripModel.findByIdAndDelete(id);
      res.json({ message: 'Trip deleted successfully' });
    } catch (error) {
      console.error('Error deleting trip:', error);
      res.status(500).json({ error: 'Failed to delete trip' });
    }
  }
}
