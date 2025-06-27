import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";

import { AddTrip } from "./pages/AddTrip/AddTrip";
import { TripsContextProvider } from "./context/trips.context";
import { UpdateTrip } from "./pages/UpdateTrip/UpdateTrip";
import { TripList } from "./pages/TripList/TripList";
import { AddTripV2 } from "./pages/AddTrip/AddTripV2";

// TODO: Find out why font does not get imported
// import "@fontsource/manrope"; // Defaults to weight 400.
// import "@fontsource/open-sans/500.css"; // Weight 500.
// import "@fontsource/open-sans/900-italic.css"; // Italic variant.

function App() {
  return (
    <BrowserRouter>
      <TripsContextProvider>
        <Navigation />

        <main style={{ height: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/trips" element={<TripList />} />

            {/* <Route path="/add-trip" element={<AddTrip />} /> */}
            {/* This version uses react hook form */}
            <Route path="/add-trip" element={<AddTripV2 />} />

            <Route path="/update-trip/:id" element={<UpdateTrip />} />
          </Routes>
        </main>
      </TripsContextProvider>
    </BrowserRouter>
  );
}

export default App;
