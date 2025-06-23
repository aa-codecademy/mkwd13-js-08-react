import { useState, useEffect, createContext } from "react";
import type { Trip } from "../types/trip.type";
import { mockedTrips } from "../data/trips.mock";
import { TripService } from "../services/trip.service";

interface TripsContext {
  trips: Trip[];
  handleDeleteTrip: (tripId: number) => string;
  handleAddTrip: (trip: Trip) => void;
}

const initialValues: TripsContext = {
  trips: [],
  handleDeleteTrip: (_tripId: number) => "",
  handleAddTrip: (_trip: Trip) => {},
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

  const handleDeleteTrip = (tripId: number): string => {
    const hasConfirmed = confirm("Are you sure you want to delete this trip?");
    if (!hasConfirmed) return "User did not confirm deleting";

    const remainingTrips = trips.filter((trip) => trip.id !== tripId);
    setTrips(remainingTrips);
    return "Delete success";
  };

  const handleAddTrip = (trip: Trip): void => {
    setTrips([...trips, trip]);
  };

  return (
    <TripsContext.Provider
      value={{
        trips: trips,
        handleAddTrip: handleAddTrip,
        handleDeleteTrip: handleDeleteTrip,
      }}
    >
      {props.children}
    </TripsContext.Provider>
  );
};
