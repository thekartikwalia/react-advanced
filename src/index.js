import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import AppContext from "./store/app-context";

// AppContext ki value, saare components joki Provider se wrapped hain
// Unke ander accessible hogi

// Provider ko pass karni hoti hai ek value (default value)
// Provider is always used with value

// doubel wrap, ek JS btabne ke liye aur ek object btane ke liye

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContext.Provider
    value={{
      message: "Hello Context",
    }}
  >
    <App />
  </AppContext.Provider>
);
