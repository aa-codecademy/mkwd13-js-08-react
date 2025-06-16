import "./App.css";
import { ComponentA } from "./components/ComponentA";
import { AppContextProvider } from "./context/app.context";
import { AuthContextProvider } from "./context/auth.context";

function App() {
  return (
    <>
      <AuthContextProvider>
        {/* CONTEXT-A */}
        <AppContextProvider>
          <h2>With context implementation</h2>
          {/* All component wrapped in ComponentA will get access to the context */}
          <ComponentA />
        </AppContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
