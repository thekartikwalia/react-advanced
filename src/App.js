import { useState } from "react";

import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import SetCounter from "./components/SetCounter";

function App() {
  console.log("APP RENDERED");
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleSetCount = (newCount) => {
    setCount(newCount);
  };

  // Way-2 (Structure your components in a way that you don't get stuck in unencessary Re-renders)
  // Mai alag component bna sakta tha for this input, and iss state (enteredCount) ko usmei rakhta
  // Better re-structuring of components & states to stop redundant rendering cycles

  return (
    <div>
      <Counter count={count} />
      <CounterButton onButtonClick={handleIncrement}>Increase</CounterButton>
      <CounterButton onButtonClick={handleDecrement}>Decrease</CounterButton>
      <SetCounter onSet={handleSetCount} />
    </div>
  );
}

export default App;
