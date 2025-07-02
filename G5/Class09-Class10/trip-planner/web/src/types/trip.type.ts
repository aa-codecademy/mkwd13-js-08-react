export enum TripStatus {
  PLANNED = "planned",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface Trip {
  id: string;
  title: string;
  destination: string;
  status: TripStatus;
  budget: number;
  image: string;

  // TODO: Convert to timestamp in the Backend also
  createdAt: string;
  updatedAt: string;
}

export interface TripCreationProps {
  title: string;
  destination: string;
  budget: number;
  image: string;
}

export type UpdateTripProps = Partial<
  TripCreationProps & { status: TripStatus }
>;
