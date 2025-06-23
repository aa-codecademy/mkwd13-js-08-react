import "./App.css";
import { Navigation } from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WithFetch } from "./pages/WithFetch";
import { WithAxios } from "./pages/WithAxios";

function RoutesForFetch() {
  return (
    <Routes>
      {/* localhost:5173 */}
      <Route path="/" element={<h1>Home</h1>} />
      {/* localhost:5173/with-fetch */}
      <Route path="/with-fetch" element={<h1>With fetch </h1>} />
      {/* localhost:5173/with-axios */}
      <Route path="/with-axios" element={<h1>With axios</h1>} />
    </Routes>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        {/* This approach is valid also if we want to separate routes */}
        {/* <RoutesForFetch /> */}

        <Routes>
          {/* localhost:5173 */}
          <Route path="/" element={<h1>Home</h1>} />
          {/* localhost:5173/with-fetch */}
          <Route path="/with-fetch" element={<WithFetch />} />
          {/* localhost:5173/with-axios */}
          <Route path="/with-axios" element={<WithAxios />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
