import { useEffect, useState } from "react";
import Login from "./componentsForUseEffect/Login";
import Home from "./componentsForUseEffect/Home";

import "./App.css";

// We don't store data in Frontend to keep data protected 
// We store data in Database (collection of data)
// Aur voh data kis form mei rakha jayega, uss basis pe bhot saare types of databases hote hain 
// Like: MongoDB, mySQL, PostgresSQL

// React App and Database kabhi bhi directly bat cheet nahi karte 
// Kyuki database se connect karne ke liye usse chahiye database ke credentials 
// And fir merko credentials frontend mei rakhne padenge, which is security issue 

// Isliye tumhare paas hota hai ek Backend server 
// Backend server ka kaam hota hai ki database se jab data ko fetch karna hai 
// Jab client ko chahiye data, toh data usse nikal ke dedo 
// Authentication ka kaam karta hai backend server (Middlewares n all are also held in Backend server)
// You can write this in any language (PHP, NodeJS, Django, Golang, Rust)

// Kaam same he hai ki jab request aaye frontend se, toh data bhejdo ya data mei kuch add karna hai toh voh krlo
// Voh saara logic likha hota hai backend server pe

// Toh react baatcheet karega backend server se, aur kahega ki bhyii yeh wala data merko chahiye 

// Yeh toh hogya CLIENT-SERVER MODEL
// CLient-Server model kya hai ? Ki merpe ek hai Client (browser, mobile app, desktop app, etc.)
// Aur ek ho sakta hai Server, aur server interact karta hai Database se 
// Iss tarah se yeh teeno interact kar rahe hote hain 

// CLient ko data chahiye hoga, toh voh Server pe ek request maarega (HTTP request)
// HTTP ek protocol (set of rules) hai
// Jab bhi mai koi request maarta hun Client se Server pe, 
// toh yeh set of rules follow karne waali ko request hoti hai, usko HTTP request kehte hain 

// There are 4 types of HTTP request :
// 1. GET -> Mai kuch data maangra hun database se, ki yeh data send kardo
// 2. POST -> Yeh data submit kardo, yeh data mera database mei add hojaye (like form submit sends a post request)
// 3. PUT -> update kardo mera data jo already database mei hai (like profile updation)
// 4. DELETE -> mujhe kuch delete karna hai apne database mei se 
// All 4 of these follow set of rules defined by HTTP protocol

// Now, let's talk about API (Appplication Programming Interface) 
// API is like restaurant ka Menu 
// Ek server ke paas kuch requests ko handle karne ka logic likha hua hai 
// Uske liye usne API define kiya hua hai, API hai uss server ka menu card
// Koi bhi request aayi kisi endpoint pe toh yeh kardena 
// Aur requests ke liye define hote hai API endpoints 
// HTTP request jo jaati hai, voh backend server ke API endpoint pe aati hai 
// Aur fir API endpoint ke baad server handle karta hai usko
// bass yehi tha hmara API, API kuch nhi bss server ka menu card hai

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");

    if (storedLoginStatus === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);

    localStorage.setItem("isLoggedIn", "1");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);

    localStorage.removeItem("isLoggedIn");
  };

  return (
    <div>
      {isLoggedIn ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
