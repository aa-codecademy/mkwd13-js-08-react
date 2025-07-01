import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";

import { AddTrip } from "./pages/AddTrip/AddTrip";
import { TripsContextProvider } from "./context/trips.context";
import { UpdateTrip } from "./pages/UpdateTrip/UpdateTrip";
import { TripList } from "./pages/TripList/TripList";
import { AddTripV2 } from "./pages/AddTrip/AddTripV2";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { AuthContext, AuthContextProvider } from "./context/auth.context";
import { ProtectedRoute } from "./components/ProtectedRoute";

// TODO: Find out why font does not get imported
// import "@fontsource/manrope"; // Defaults to weight 400.
// import "@fontsource/open-sans/500.css"; // Weight 500.
// import "@fontsource/open-sans/900-italic.css"; // Italic variant.

const routes = [
  { path: "/", element: <Home /> },
  { path: "/trips", element: <TripList /> },
  { path: "/add-trip", element: <AddTripV2 /> },
  { path: "/update-trip/:id", element: <UpdateTrip /> },
];

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <TripsContextProvider>
          <Navigation />

          <main style={{ height: "100vh" }}>
            <Routes>
              {/* Protected route */}
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<ProtectedRoute>{route.element}</ProtectedRoute>}
                />
              ))}

              {/* Public route */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </TripsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
