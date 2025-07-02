import { memo } from "react";

interface CounterControllsProps {
  handleIncrement: () => void;
  handleDecrement: () => void;
}

// MEMO => KE PREVENIRA RE-RENDER dokolku PROPS-ot sto go dobiva komponentata ne bide promenet
export const CounterControlls = memo(
  ({ handleDecrement, handleIncrement }: CounterControllsProps) => {
    console.log("COUNTER CONTROLLS COMPONENT");
    return (
      <>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </>
    );
  }
);
