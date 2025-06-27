import { useState, useEffect, createContext } from "react";
import type {
  Trip,
  TripCreationProps,
  UpdateTripProps,
} from "../types/trip.type";

import { TripService } from "../services/trip.service";

interface TripsContext {
  trips: Trip[];
  handleDeleteTrip: (tripId: string) => void;
  handleAddTrip: (tripCreationProps: TripCreationProps) => Promise<void>;
  handleUpdateTrip: (
    tripId: string,
    updateTripProps: UpdateTripProps
  ) => Promise<void>;
}

const initialValues: TripsContext = {
  trips: [],
  handleDeleteTrip: (_tripId: string) => {},
  handleAddTrip: async (_tripCreationProps: TripCreationProps) => {},
  handleUpdateTrip: async (
    _tripId: string,
    _updateTripProps: UpdateTripProps
  ) => {},
};

export const TripsContext = createContext(initialValues);

interface TripsContextProvider {
  children: React.ReactNode;
}

const fetchTrips = async () => {
  const data = await TripService.getAllTrips();

  return data;
};

export const TripsContextProvider = (props: TripsContextProvider) => {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetchTrips();
      setTrips(response);
    })();
  }, []);

  const handleDeleteTrip = async (tripId: string) => {
    const hasConfirmed = confirm("Are you sure you want to delete this trip?");
    if (!hasConfirmed) return "User did not confirm deleting";

    await TripService.deleteTrip(tripId);

    // #1 - Refetch to get the up-to-date data.
    // const response = await fetchTrips();
    // setTrips(response);

    // #2 - Update the local state so we have the up-to-date data after success delete request
    const remainingTrips = trips.filter((trip) => trip.id !== tripId);
    setTrips(remainingTrips);
  };

  const handleAddTrip = async (
    tripCreationProps: TripCreationProps
  ): Promise<void> => {
    const newTrip = await TripService.createTrip(tripCreationProps);

    // #1. After success create, we re-fetch all of the trips so we can have up-to-date data.
    // const trips = await fetchTrips();
    // setTrips(trips);

    // #2. The new entity returned from the BE, save it to the state
    if (newTrip) {
      setTrips([...trips, newTrip]);
      console.log("Success create");
    }
  };

  const handleUpdateTrip = async (
    tripId: string,
    updateTripProps: UpdateTripProps
  ) => {
    const updatedTrip = await TripService.updateTrip(tripId, updateTripProps);

    console.log("Updated trip", updatedTrip);
    if (updatedTrip) {
      const updatedTrips = trips.map((trip) => {
        if (trip.id === tripId) {
          return updatedTrip;
        }
        return trip;
      });

      setTrips(updatedTrips);
    }
  };

  return (
    <TripsContext.Provider
      value={{
        trips: trips,
        handleAddTrip: handleAddTrip,
        handleDeleteTrip: handleDeleteTrip,
        handleUpdateTrip: handleUpdateTrip,
      }}
    >
      {props.children}
    </TripsContext.Provider>
  );
};
