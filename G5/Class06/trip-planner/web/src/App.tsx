import "./App.css";
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { TripList } from "./components/TripList";
import { AddTrip } from "./components/AddTrip";
import { TripsContextProvider } from "./context/trips.context";
import { UpdateTrip } from "./components/UpdateTrip";

function App() {
  return (
    <BrowserRouter>
      <TripsContextProvider>
        <Navigation />

        <main style={{ height: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/trips" element={<TripList />} />

            <Route path="/add-trip" element={<AddTrip />} />

            <Route path="/update-trip/:id" element={<UpdateTrip />} />
          </Routes>
        </main>
      </TripsContextProvider>
    </BrowserRouter>
  );
}

export default App;
