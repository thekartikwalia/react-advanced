import { memo } from "react";   

// using "memo" on CounterButton so that it doesn't gets re-rendered until it's props change

// Even state (count) isn't a prop of CounterButton 
// But still on changing state (count), this CounterButton gets re-rendered even after using "memo"

// Agar yeh hora hai render wapas, toh mtlb iske props change hue hain 
// Ab iske props change kaise hue hain ?
// Agar tum dhyan se dekho toh iska prop jo hai voh function hai 
// Aur function jab bhi yeh App component re-render hoga, 
// yeh function new define hojayega memory mei bcoz functions are created as objects in memory

// "memo" is able to check value like state (count) ki voh change hori hai ki nahi 
// but function change hmesha value ke sath ayega agar function re-render hua hai 
// bhale he naam same hai function ka toh kya hua, app re-render hua hai toh nya function bngya 
// yeh cheez "memo" ko pata he nahi chla

// Toh "memo" toh kaam karna band kardiya hmara agar hum ek function le rahe hain as prop
// Aur yeh toh hogyi dikkat 

// Iss dikkat ko solve karne ke liye ek hook hota hai, useCallback()


const CounterButton = memo(function CounterButton ({ children, onButtonClick }) {
    console.log("COUNTER BUTTON RENDERED");
    return <button onClick={onButtonClick}>{children}</button>;
});

export default CounterButton;