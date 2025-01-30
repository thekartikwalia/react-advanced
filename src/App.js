import { useEffect, useState } from "react";
import Login from "./componentsForUseEffect/Login";
import Home from "./componentsForUseEffect/Home";

// We can now easily manipulate DOM using state, context, and props
// Today, we're gonna talk about Side-Effects (or Effects)
// Yeh voh piece of code hai jo component render cycle mei nahi aana chahta
// But component ke ander rehna chahta hai (kyuki usko props, states chahiye hongi)

// Eg-1 : Browser ki apni local storage mei tumhe kuch store karna hai
// Agar voh component render cycle ka part hota, toh toh fir baar baar save hota rehta
// Voh hum nahi chahte, offcourse performance ki dikkat ayegi na fir

// Eg-2 : HTTP request bhejni ho backend server pe
// Hum lagatar toh bhej nahi sakte, yeh code render cycle mei toh nahi rakhna
// par component ke ander rakhna hai

// Uske liye hote hein Side Effects, aur isko implement karne ke liye react ek hook provide karta hai useEffect

// Side-Effects ka kaam kya hota hai, voh piece of code rakhna joki hum render cycle mei nhi rakhna chahte,
// apne hisaab se execute karna chahte hai (ki yeh yeh change ho, tabhi execute karna)

// On refreshing i loose my Login state, aisa kyu hora hai ?
// Maine login kiya, toh isLoggedIn state hogyi true
// Aur agar mai refresh karta hun, toh mera app wapas scratch se load hora hai, toh default state mei chla gya

// Merko kuch aisa karna hai ki meri app MAINTAIN rahe, mtlb iska LOGIN status maintained rahe
// Voh mai kaise kar sakta hun ?
// Voh mai aise kar sakta hun ki abhi ke liye kahi aur daalna pdega merko iss state ko
// Iss code mei toh kahi rakh nhi sakta, iss code mei kahin bhi rakhunga app refresh hote he meri state loose hojayegi
// Isliya mai isko kahan rakhdunga, local storage mei iski state rakhni pdegi mujhe

// Mai kya chahta hun ki yeh login ho, toh isko jo isLoggedIn state hai, voh localStorage mei chli jaye
// Aur jab app refresh ho toh mai usko wahan se wapis retrieve karlu
// Agar voh loggedIn true hai, toh wapis seedha isLoggedIn true chla jaye uske paas, yeh mai chahta hun

function App() {
  console.log("APP RENDERING");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");

    if (storedLoginStatus === "1") {
      // matlab ki user LoggedIn hai, toh seedha isLoggedIn ko kardo true, fir hmara Home render hojayega
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);

    localStorage.setItem("isLoggedIn", "1");
  };

  // Ismei bhot bdi galti hai, ki jaise he mera App chla usne toh check krliya ki localStorage mei status hai ki nahi h
  // Agar status 1 hua toh yeh state wapas set kardega 1
  // State wapas set kardega matlab component re-render hoga
  // Re-render hoga with the new value of isLoggedIn
  // Fir yeh wapas localStorage se status nikla
  // Toh yeh ek INFINITE loop banjara hai, upar waale code ke kaaran
  // Above explanation is in case of absence of useEffect 

  // Ab isko theek karne ka jo treka hota hai, vohi hota hai SIDE-EFFECTS
  // Side-Effect ka ek hook hai useEffect side effect daalne ke liye
  // 2 parameters hote hain : function and array of dependencies

  // Function mei merko vohi piece of code daalna hai, joki mai chahta hun as Side-Efect

  // Yeh kaise kaam karta hai dekhna 
  // Pehle mera App render hoga, useState false hui
  // Jab yeh ek baar render hojata hai (sabkuch except useEffect), uske baad yeh aata hai useEffect par,
  // Aur dekhta hai ki kya iski dependencies change hui hain
  // Aur pehli baar jab yeh chlega, toh 1st time ke liye yeh maanta hai ki haan hui hai 
  // Toh 1st time toh yeh useEffect ek baar toh humesha execute hota hai App ke chalte he 

  // Sabse pehle App render hora hai
  // useEffect wala block execute nhi hua 
  // Sab render hua, aur fir wapas useEffect ke block pe aaya 
  // 1st render ke baad useEffect pe aajata hai and check karta hai ki yeh dependency mei chnage hai ya nahi 
  // 1st time change hai he, toh yeh code run hojayega, toh 1st time chalte he yeh state true hojayegi
  // Toh wapas re-render hoke state true kardega 
  // Iss tarah se mera Login status True set hojayega jab yeh chlega 

  // Array of dependencies jab tum khaali dete ho, 
  // Iska matlab hai ki mera App sirf tabhi chlega jab 1st time mera App render hua 
  // Waise dependencies mei tumhe state, functions, variables used dena hota hai
  // Ki bhyii jab jab meri dependencies change ho iss code ki, toh he yeh code wapis run karna 
  // Agar tum khaali dete ho iska mtlb ki voh 1st time chalega 

  // APP RENDERING 2 baar iss kaaran hora hai kyuki yahan pe 
  // useEffect mei state ek aur baar set hoja rahi hai 

  // localStorage ko zarurat nahi hai as dependency daalne ki

  const handleLogout = () => {
    setIsLoggedIn(false);

    localStorage.removeItem("isLoggedIn");
  };

  // We maintained login and logout status, based on usne pehle kya kiya tha 
  // LocalStorage ki help se 

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
