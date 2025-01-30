import React, { useEffect, useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [isFormValid, setIsFormValid] = useState(false);
  // If form gets valid (lengths > 5), then enable the Login button

  // Mai karta hun ab Side-Effects introduce
  // Ek application merko side-effect ka yeh dikha tha ki isFormValid state jo hai
  // voh 2 states pe depend kar raha hai, and isko maine 2 onChnage handlers mei daal rakha hai
  // Instead of this, mai isko as a side-effect daal sakta hun ki jab jab meri yeh dono states (email & password)
  // change ho, tab isFormValid ko calculate karlo

  // useEffect(() => {
  //   setIsFormValid(email.length > 5 && password.length > 5);
  // }, [email, password]);
  // Jab jab emaila ur password change hon tab tab yeh automatically run hojaye apne aap

  // But kya merko isFormValid state banane ki zarurat thi ?
  // Yeh depend toh sirf email aur password ki length pe kar raha hai
  // Mai isko even state se bhi hata sakta hun kyuki yeh sirf email aur password state pe depend kar raha hai
  // Jab jab emaila ur password change honge, tab mera ye component waise he re-render hoga
  // Aur waise he re-render hoga toh mai isko as a variable bhi rakh sakta hun yahan pe
  // Since yeh state pe he depend kar raha hai toh merko isko another state bnane ki zrurat he nahi hai

  const isFormValid = email.length > 5 && password.length > 5;
  // shi chlra kyuki email password hone pe waise he re-render hojayega component
  // re-render hoga toh as a variable he daal lo

  // Even side-effect mei nahi chahiye mujhe yahan pe
  // Toh hook kabhi kabhi use nahi bhi karna hota

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    // setIsFormValid(enteredEmail.length > 5 && password.length > 5);
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
    // setIsFormValid(enteredPassword.length > 5 && email.length > 5);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
        required
      />
      <button type="submit" className={`${isFormValid ? "" : "disabled"}`}>
        Login
      </button>
    </form>
  );
};

export default Login;
