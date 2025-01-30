import { useContext, useState } from "react";
import AppContext from "./store/app-context";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <AppContext.Provider value={{ isLoggedIn: isLoggedIn, login: handleLogin }} >
      <h1>Hello Context</h1>
      <Login />
    </AppContext.Provider>
  );
}

export default App;
