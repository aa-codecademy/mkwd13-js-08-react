import { useState } from "react";
import Button from "../Button/Button";
import "./Counter.css";

function Counter() {
  console.log("Counter component rerendered");

  const [count, setCount] = useState(0);

  const add = () => {
    if (count === 10) return;
    // setCount(count + 1);
    setCount(prev => prev + 1);
  };

  const remove = () => {
    if (count <= 0) return;
    // setCount(count - 1);
    setCount(prev => prev - 1);
  };

  return (
    <div className="Counter">
      <div>Hooks Counter</div>
      <div className="counter-display">{count}</div>
      <div className="counter-controls">
        <Button
          text="-1"
          onBtnClick={() => {
            remove();
          }}
        />
        <Button
          text="+1"
          onBtnClick={() => {
            add();
          }}
        />
      </div>
    </div>
  );
}

export default Counter;
