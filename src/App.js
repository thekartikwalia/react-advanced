import { useState, useCallback } from "react";

import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import SetCounter from "./components/SetCounter";

function App() {
  console.log("APP RENDERED");
  const [count, setCount] = useState(0);

  // useCallabck() mei pehla parameter hota hai ek function, aur dusra hota hai array of dependencies
  // Iss array ki koi bhi value change ho, toh iss function ko re-create kardena, warna mat karna
  // Basically iss function ki dependency 

  // setCount() jo function hai voh react make sure karta hai ki voh kabhi change nah ho
  // Yeh yaad rakhna ki jo set karne waale functions hai, jo useState() se bante hai,
  // voh react make sure karta hai ki voh kabhi change nah ho 

  // useCallback() ka use kiya aur 2nd parameter mei daal diya khaali array,
  // matlab isko kabhi re-create mat karo (do same with handleDecrement)
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);
  // So useCallback() can be used to stop redundant re-renders of components,
  // which occurs due to sending of a function as prop

  const handleSetCount = (newCount) => {
    setCount(newCount);
  };

  // Way-2 (Structure your components in a way that you don't get stuck in unencessary Re-renders)
  // Mai alag component bna sakta tha for this input, and iss state (enteredCount) ko usmei rakhta
  // Better re-structuring of components & states to stop redundant rendering cycles


  // Now upon resetting of count why CounterButton is getting re-rendered 
  // Let's try using "memo" on CounterButton so that it doesn't gets re-rendered until it's props change
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
