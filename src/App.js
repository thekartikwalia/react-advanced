import { useState, useCallback, useMemo } from "react";

import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import SetCounter from "./components/SetCounter";

// useMemo() tab use hota hai 
// Jaise ki maanlo mere paas calc() karke ek function defined hota, 
// jismei koi bhaari computation hora h
// Maan lete hain ki koi ek state (state) aur hai, joki frequently change hori hai 
// Aur uss frequently change ke karan, yeh App re-render hora, 
// uske karan yeh calculatedCount re-render hora hai
// calculatedCount re-render hora hai toh yeh calc() function baar re-render hora hai 

function calc(count) {
  // expensive calculation (matlab jo expensive on computation hai, jo zyada memory le)
  // like prime check or whatever, depending upon use case 
}

function App() {
  console.log("APP RENDERED");
  const [count, setCount] = useState(0);
  const [state, setState] = useState(null);    // chnages frequently, so re-renders App component 
  // Toh yeh calculateCount faltu mei call hua na, iska toh na count change hua
  // function vohi ka vohi hai, calculated count ki value vohi ki vohi hai 
  // toh faaltu mei isko call kyu kar raha hun
  // Aisi cheezon ko handle karne ke liye hota hai useMemo() hook

  // If i wrap it with useMemo(), again takes 2 parameters -> function and dependencies
  const calculatedCount = useMemo(() => calc(count), [count]);
  // Ab useMemo() kya karega ?
  // Voh kahega ki bhyii yeh function ko dekho and isko memorise karlo 
  // matlab iska jo value hai voh calculatedCount ke ander daaldo
  // aur jab yeh dependency array change ho tabhi isko call karna 
  // jo iske ander function hai, tabhi expensive calculation karna, nahi toh mat karna 
  
  // Seedhi si baat haina ki bhyii hum dusri state change kar rahe hai, 
  // toh count ki calculation dubara kyu karein
  // Toh yahan pe dependency chahiye count, ki yeh tabhi re-calculate karo jab count change ho
  // Baaki kuch aur change ho, agar state change ho toh mat re-calculate karlena isko

  // Toh yeh tabhi re-render hoga jab mera count change hoga 
  // Aur tabhi hum expensive calculation karenge

  // Aise kaamo ke liye use hota hai useMemo()

  // BRIEF COMPARISON OF useCallback() and useMemo()
  // useCallback() tha ki jab tumhe function ki value re-create nahi karni (toh voh functions ko wrap kardeta hai)
  // useMemo() mei tum kuch bhi wrap kar sakte ho, maanlo tumhare paas koi value hai jo tumhe baar baar nahi karni
  // Most prupose of useMemo() hota hai expensive calculation ko rokna 

  // Main difference is that useMemo returns a memoized value and useCallback returns a memoized function

  // IMPORTANT THING! (Referential Equality)
  // Every time a component re-renders, its functions get recreated.
  // Due to Referential Equality, function passed as props to child component changes and "memo" doesn't works as expected
  // That's where useCallback() hook comes in to prevent the function from being recreated unless necessary.

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const handleSetCount = (newCount) => {
    setCount(newCount);
  };

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
