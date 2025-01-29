import { useState } from "react";

import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";

function App() {
  console.log("APP RENDERED");
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  }

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  }

  return (
    <div>
      <Counter count={count} />
      <CounterButton onButtonClick={handleIncrement}>Increase</CounterButton>
      <CounterButton onButtonClick={handleDecrement}>Decrease</CounterButton>
    </div>
  );
}

export default App;
