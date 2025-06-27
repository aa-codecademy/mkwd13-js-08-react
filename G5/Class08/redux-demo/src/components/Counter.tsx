import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../store/actions/counterActions";
import type { CounterState } from "../store/reducers/counterReducer";
import type { RootState } from "../store/store";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  /* EVERY ACTION WILL HAVE THE PROP TYPE */
  const handleIncrement = () => {
    dispatch({ type: INCREMENT });
  };

  const handleDecrement = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "10px",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Counter Example</h2>
      <div>
        Count: <strong>{count}</strong>
      </div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};
