import { useEffect } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { TripList } from "./components/TripList";
import { AddTrip } from "./components/AddTrip";
import { useState } from "react";
import { TripStatus, type Trip } from "./types/trip.type";

const mockedTrips: Trip[] = [
  {
    id: 1,
    title: "Summer in Paris",
    destination: "Paris",
    status: TripStatus.PLANNED,
    budget: 2500,
    image:
      "https://images.unsplash.com/photo-1549144511-f099e773c147?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Tokyo Adventure",
    destination: "Tokyo, Japan",
    status: TripStatus.IN_PROGRESS,
    budget: 3200,
    image:
      "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Bali",
    destination: "Bali, Indonesia",
    status: TripStatus.COMPLETED,
    budget: 1800,
    image:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const fetchTrips = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return mockedTrips;
};

function App() {
  const [trips, setTrips] = useState<Trip[]>([]);

  // WE CANNOT PASS ASYNC CALLBACK IN useEffect
  useEffect(() => {
    // FIRST-APPROCH
    // fetchTrips().then((response) => {
    //   console.log("Fetch is success:", response);
    // });

    // SECOND-APPROACH
    // IIFE
    (async () => {
      const response = await fetchTrips();
      console.log("Fetch is success", response);
      setTrips(response);
    })();
  }, []);

  const handleDeleteTrip = (tripId: number) => {
    const hasConfirmed = confirm("Are you sure you want to delete this trip?");
    if (!hasConfirmed) return;

    const remainingTrips = trips.filter((trip) => trip.id !== tripId);
    setTrips(remainingTrips);
  };

  const handleAddTrip = (trip: Trip) => {
    setTrips([...trips, trip]);
  };

  return (
    <BrowserRouter>
      <main>
        <Navigation />

        {/* HERE WE DEFINED THE ACCESSIBLE ROUTES IN OUR APP */}
        <Routes>
          {/* localhost:5173 */}
          <Route path="/" element={<Home />} />

          {/* localhost:5173/trips */}
          <Route
            path="/trips"
            element={
              <TripList handleDeleteTrip={handleDeleteTrip} trips={trips} />
            }
          />

          {/* localhost:5173/add-trip */}
          <Route
            path="/add-trip"
            element={<AddTrip handleAddTrip={handleAddTrip} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
