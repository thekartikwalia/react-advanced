import Login from "./components/Login";

import AppProvider from "./store/AppProvider";

function App() {

  // There's another way also
  // Instead of writing provider here, we can keep provider's logic separately 
  // So that App component remains cleaned 
  // Toh mai provider ko as separate bhi bna sakta hun (voh ek Component hone wala hai joki wrap karega isko)
  return (
    <AppProvider>
      <h1>Hello Context</h1>
      <Login />
    </AppProvider>
  );
}

export default App;
