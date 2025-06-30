import "./App.css";
import { Counter } from "./components/Counter";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Todos } from "./components/Todos";

function App() {
  return (
    <Provider store={store}>
      <div style={{ margin: "0 auto", padding: "20px" }}>
        <Counter />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
