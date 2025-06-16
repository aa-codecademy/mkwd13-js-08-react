import { useState } from "react";
import "./App.css";
import { ComponentA } from "./components/ComponentA";

function App() {
  const [title, setTitle] = useState("ComponentC");

  const handleChangeTitle = (value: string) => {
    setTitle(value);
  };

  return (
    <>
      <main>
        <h2>No context implementation</h2>
        <ComponentA title={title} handleChangeTitle={handleChangeTitle} />
      </main>
    </>
  );
}

export default App;
