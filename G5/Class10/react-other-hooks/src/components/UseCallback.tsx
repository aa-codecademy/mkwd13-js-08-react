import { useState, useCallback, useMemo } from "react";
import { CounterControlls } from "./CounterControlls";

export const UseCallBackExample = () => {
  const [count, setCount] = useState(0);

  // WITHOUT USECALLBACK
  //   const handleIncrement = () => {
  //     setCount(count + 1);
  //   };

  //   const handleDecrement = () => {
  //     setCount(count - 1);
  //   };

  // WITH USECALLBACK

  const handleIncrement = useCallback(() => {
    // THE LOGIC THAT THIS FUNCTION WILL DO
    setCount((prevCount) => {
      if (prevCount === 2) {
        console.log("prevCOunt was 2");
      }

      return prevCount + 1;
    });
  }, []);

  const handleDecrement = useCallback(() => {
    // the function scope
    setCount((prevCount) => prevCount - 1);
  }, []);

  const sentence = useMemo(() => {
    return count > 10 ? "Count is bigger then 10" : "Count is smaller then 10";
  }, [count]);

  return (
    <div>
      <h2>Use callback example</h2>
      <p>{count}</p>

      <p>{sentence}</p>

      <CounterControlls
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    </div>
  );
};
