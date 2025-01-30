import { useState, useCallback, useMemo } from "react";

import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import SetCounter from "./components/SetCounter";

// Instead of re-rendering whole JSX, react uses "Virtual DOM"
// react maintains virtual DOM behind the scenes
// react keeps 2 things with itself: old snapshot (real DOM) and virtual snapshot
// react creates virtual snapshot via Component Tree Execution
// As soon as page gets reloaded,
// whereever react finds difference in it's virtual and real DOM, it updates that portion of DOM
// React figures out state change with help of Virtual DOM

function App() {
  console.log("APP RENDERED");
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const handleSetCount = (newCount) => {
    setCount(newCount);
  };

  const arr = [1, 2, 3, 4];

  return (
    <div>
      <Counter count={count} />
      <CounterButton onButtonClick={handleIncrement}>Increase</CounterButton>
      <CounterButton onButtonClick={handleDecrement}>Decrease</CounterButton>
      <SetCounter onSet={handleSetCount} />
      <SetCounter onSet={handleSetCount} />
      {/* Dono setCounter ko set karne pe, count ki state change hori hai, but dono ki apni state hai */}
      {/* Mai agar ek mei 0 ka 1 karunga, toh kya neche waale mei bhi 0 ka 1 hojayega kya ? 
      Nahi hoga, iski state iski apni state hai, none of any other state */}

      {/* Key point is even if i resuse the same component 2 times, snapshot of both will be different,
      and react can figure it out all by itself */}

      {/* But sometimes we need to tell react that how to figure out */}
      <ul>
        {arr.map((item, index) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* This gives a warning (in case of absence of key) that each child should have a unique key prop */}
      {/* Iska matlab hai react ko samajh nhi aaara, usne jab iski virtual DOM prepare kari */}
      {/* React ke liye tab dikkat aajati hai virtual DOM compare karna, ki iss li ko identify kaise kru, 
      iss li ki identity kya hai ?, isko mai virtual DOM mei compare kaise karu ? 
      Aise cases mei React poora <li> he render kar deta hai, in case agar tum kuch change kar raho ho toh */}
      {/* Poora render kar kyu rahe ho ?  */}
      {/* Islia koi bhi cheez jab tum map kar rahe hote ho, toh tumhe deni hoti hai key aur voh honi chahiye unique */}
      {/* Aur dusri cheez ki index mat dena, kyuki agar maine arr mei kuch push kiya toh mere indices change hojayenge */}
      {/* Because of this 
      1. Giving key is important
      2. Key should be unique
      3. Key should be kept in link with item, means every item should've a unique id (you could've created array of objects)
      4. Agar array mei kuch push ya pop nhi hora, then only you can use index as key */}
      {/* Keys are used to uniquely identify that particular element, for making react able to compare it in virtual DOM
      by telling react element's identity in virtual DOM */}
    </div>
  );
}

export default App;
