import mongoose, { Document, Schema } from 'mongoose';
import { Trip, TripStatus } from '../types/trip.types';

export interface TripDocument extends Omit<Trip, 'id'>, Document {
  _id: string;
}

const tripSchema = new Schema<TripDocument>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  destination: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: Object.values(TripStatus),
    default: TripStatus.PLANNED
  },
  budget: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    required: true
  },
  creatorId: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

export const TripModel = mongoose.model<TripDocument>('Trip', tripSchema);
