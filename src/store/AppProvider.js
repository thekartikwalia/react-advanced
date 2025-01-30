import React, { useReducer } from "react";
import { useState } from "react";
import AppContext from "./app-context";

// useState hook ka ek alternate hota hai jsiko bolte hai useReducer
// Voh hota hai complex state management ke liye
// I can wrap state and it's related functions in useReducer

// Toh useReducer ke case mei, mai ek state bana sakta hun aur uske liye actions dispatch kar sakta hun
// ki yeh meri state hai, ismei ye ye actions kardo, aur yeh mere action ka type hai

// useReducer ka mtlb he yehi hai ki reduce complex actions into simple ones
// Always gets called at Top Level of a component

// REDUCER FUNCTION
// Has 2 parameters (state & action) (action is an object)

// Reducer function mei kya hota hai jo tum cheez return karte ho, voh ho jaato hai hmari nayi state
// Yeh behind the scenes react handle karta hai
function authReducer(state, action) {
  if (action.type === "LOGIN") {
    return {
      isLoggedIn: true,
    };
  } else if (action.type === "LOGOUT") {
    return {
      isLoggedIn: false,
    };
  } else {
    return state; // Matlab vohi state wapas return hojayegi
  }
}

// UseCase of Reducer Function 

// Reducer function generally tab use hota hai jab maanlo tumhare paas ek state hai jismei bhot saari values hain
// Like userInfo state jismei name, email, etc bhot valeus hain
// Aur unn sabko manage karne ke liye tumhe alag alag likhna hai
// Toh uss cases mei tum useReducer use kar sakte ho

// Aaj humne usko Login state ke liye use kiya (generally also used in case of Forms)

const initialAuthState = {
  isLoggedIn: false,
};

const AppProvider = ({ children }) => {
  const [authState, dispatchAuth] = useReducer(authReducer, initialAuthState);
  // dispatch means meri state mei yeh badal do, dispatch mei mai karta hun actions
  // takes reducer function, and default value

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    dispatchAuth({
      type: "LOGIN",
    });
    //   setIsLoggedIn(true);
  };

  const handleLogout = () => {
    dispatchAuth({
      type: "LOGOUT",
    });
    // setIsLoggedIn(false);
  };

  const appContextValue = {
    isLoggedIn: authState.isLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
