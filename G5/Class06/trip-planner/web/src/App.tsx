import "./App.css";
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { TripList } from "./components/TripList";
import { AddTrip } from "./components/AddTrip";
import { TripsContextProvider } from "./context/trips.context";

function App() {
  return (
    <BrowserRouter>
      <TripsContextProvider>
        <main>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/trips" element={<TripList />} />

            <Route path="/add-trip" element={<AddTrip />} />
          </Routes>
        </main>
      </TripsContextProvider>
    </BrowserRouter>
  );
}

export default App;
