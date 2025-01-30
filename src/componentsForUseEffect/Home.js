import React from "react";

const Home = ({ onLogout }) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
};

export default Home;
