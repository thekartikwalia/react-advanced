import React from 'react'
import { useState } from 'react';
import AppContext from './app-context';

// Mai chahta hun ki ek wrapper component ban jaye
// Jiske ander meri saari states aur functions apne aap chle jaye 

const AppProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };

    const appContextValue = {
        isLoggedIn: isLoggedIn,
        login: handleLogin,
    }

  return (
    <AppContext.Provider value={appContextValue}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider