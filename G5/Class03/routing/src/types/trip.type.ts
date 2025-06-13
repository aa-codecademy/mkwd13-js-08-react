export enum TripStatus {
  PLANNED = "planned",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface Trip {
  id: number;
  title: string;
  destination: string;
  status: TripStatus;
  budget: number;
  image: string;
}
