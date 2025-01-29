// import { memo } from "react";

// Way-1 of Optimisation (using "memo" to avoid unnecessary re-renders)

// memo ne check kiya ki kya iss component ke props change hue hain
// Agar change hue hain props, toh re-render kardo
// Ptherwise, re-render mat karo (faltu re-render)
// This is a way of Optimisation

// But don't overuse memo
// Check of old prop and new prop is also an extra computation 
// So it's overuse would degrade the performance 

// You should use "memo" in case of top level big components
// whose props aren't changing, but they're getting re-rendered 
// unnecessarily due to re-rendering of their parent

// const Counter = memo(function Counter ({ count }) {
//     console.log("COUNTER RENDERED");
//     return <h1>Counter: {count}</h1>;
// });

function Counter ({ count }) {
    console.log("COUNTER RENDERED");
    return <h1>Counter: {count}</h1>;
}

export default Counter;