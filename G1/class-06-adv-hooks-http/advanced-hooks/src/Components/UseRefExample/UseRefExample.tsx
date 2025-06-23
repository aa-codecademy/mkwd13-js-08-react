import { useRef, useState } from "react";

const UseRefExample = () => {
  console.log("component rerendered");

  const [rerenderToggle, setRerenderToggle] = useState(false);
  const [count, setCount] = useState(0);

  let rerenderCount = 0;
  const rerenderCountRef = useRef(0);

  const intervalRef = useRef(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const addToRerenderCount = () => {
    rerenderCount++;
    rerenderCountRef.current++;

    console.log("Basic Count", rerenderCount);
    console.log("Ref Count", rerenderCountRef.current);

    setRerenderToggle(prev => !prev);
  };

  const startStopwatch = () => {
    intervalRef.current = setInterval(() => {
      console.log("interval called");
      setCount(prevCount => prevCount + 1);
    }, 100);
  };

  const stopStopwatch = () => {
    setCount(0);
    clearInterval(intervalRef.current);
  };

  return (
    <section>
      <h1>useRef Example</h1>
      <h2>{rerenderToggle}</h2>
      <div>
        <button
          onClick={() => {
            addToRerenderCount();
          }}
        >
          Rerender Component
        </button>
      </div>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={startStopwatch}>START</button>
        <button onClick={stopStopwatch}>END</button>
      </div>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            console.log(inputRef.current);
            inputRef.current?.focus();
          }}
        >
          Focus Input
        </button>
      </div>
    </section>
  );
};

export default UseRefExample;
