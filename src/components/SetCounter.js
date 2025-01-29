import { useState } from "react";


// Now when state (enteredCount) changes, only SetCounter gets re-rendered
// So we optimised without use of "memo"

const SetCounter = ({ onSet }) => {
    console.log("SET COUNTER RENDERED")
  const [enteredCount, setEnteredCount] = useState(0);

  const handleEnteredCountChange = (event) => {
    setEnteredCount(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        value={enteredCount}
        onChange={handleEnteredCountChange}
      />
      <button onClick={() => onSet(enteredCount)}>Set</button>
    </div>
  );
};

export default SetCounter;
