export enum TripStatus {
  PLANNED = "planned",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface Trip {
  id?: number;
  _id?: string;
  title: string;
  destination: string;
  status: TripStatus;
  budget: number;
  image: string;
  creatorId: string;
}

export interface CreateTripDTO {
  title: string;
  destination: string;
  budget: number;
  image: string;
}

export interface UpdateTripDTO {
  title?: string;
  destination?: string;
  status?: TripStatus;
  budget?: number;
  image?: string;
}
