import React, { useEffect, useState } from "react";

// Let's now understand CLEANUP Function

// Jaise he mai type kar raha hun, mere har keystroke pe "checking is form valid" chal ra hai
// Mai chahta hun ki har key stroke pe na chle, jab user type kar raha hai toh usko type karne de
// Jab uski typing ruk jaye, tab form valid check kare

// Isko bolte hain DE-BOUNCING Effect (isko laane ke liye use hota hai useEffect hook)
// ki mai itna fast fast apne state ko call nhi karna chahta
// Mai chahta hun ki vo kuch break le 500ms ka aur fir yeh chale

// Agar maine kuch multiple letters 500ms ke timeout ke ander likhe hain
// Toh voh clear kardo 
// Mai pichle wala timeout clear karna chahta hun 
// Uske liye useEffect mei hota hai CLEANUP function

// Har key stroke pe pichle key stroke ka timer clear karna pdega
// CLEANUP function kya karta hai, har useEffect ke chalne se pehle
// Pehle CLEANUP function chlta hai (Bss pehli baar cleanup nahi chlta)

// Last mei sirf ek he timer bacha, jo maine last keystroke pe daala tha

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Checking is form valid");
      setIsFormValid(email.trim().length > 5 && password.trim().length > 5);
    }, 500);

    // CLEAN UP : Yeh aisa function hone wala hai 
    // Jo pichla useEffect jab run hua tha, yeh us se pehle execute hojaye
    // this gets called before execution of above piece of code (setTimeout) 
    return () => {
      console.log("CLEANUP");
      clearTimeout(timeoutId);
    };
  }, [email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
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
