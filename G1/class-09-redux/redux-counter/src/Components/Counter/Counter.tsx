import Button from "../Button/Button";
import "./Counter.css";
import {
  decrementByValue,
  decrementOne,
  incrementByValue,
  incrementOne,
} from "../../state/slices/counter.slice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

export default function Counter() {
  const count = useAppSelector(state => state.counter.value);

  const dispatch = useAppDispatch();

  return (
    <div className="Counter">
      <div className="display">{count}</div>
      <div className="controls">
        <Button
          onBtnClick={() => {
            dispatch(decrementByValue(5));
          }}
        >
          Remove 5
        </Button>
        <Button
          onBtnClick={() => {
            dispatch(decrementOne());
          }}
        >
          Remove 1
        </Button>
        <Button
          onBtnClick={() => {
            dispatch(incrementOne());
          }}
        >
          Add 1
        </Button>
        <Button
          onBtnClick={() => {
            dispatch(incrementByValue(5));
          }}
        >
          Add 5
        </Button>
      </div>
    </div>
  );
}
