import { Router } from 'express';
import { TripController } from '../controllers/trip.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// Apply authentication middleware to all trip routes
router.use(authenticateToken);

// GET /api/trips - Get all trips
router.get('/', TripController.getAllTrips);

// GET /api/trips/:id - Get trip by ID
router.get('/:id', TripController.getTripById);

// POST /api/trips - Create new trip
router.post('/', TripController.createTrip);

// PUT /api/trips/:id - Update trip
router.put('/:id', TripController.updateTrip);

// DELETE /api/trips/:id - Delete trip
router.delete('/:id', TripController.deleteTrip);

export default router;
