import { useEffect, useState } from "react";
import Login from "./componentsForUseEffect/Login";
import Home from "./componentsForUseEffect/Home";

import "./App.css";

// Main chahta hun ki email ki length and password ki length greater than 5 ho, 
// tohi mai login dbaunga, nahi toh mera button disabled rahe 

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
