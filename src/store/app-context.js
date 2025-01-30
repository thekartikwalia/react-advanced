import { createContext } from "react";

// We can give anything inside context string, object, array
// Abhi ke liye string dedi, but mostly tum isse as objects dekhoge 
// const AppContext = createContext("Hello Context");    
// "Hello Context" is the default value of context 

// Context mei kya hota hai ki yahan tum uski structure define kar sakte ho 
// jaise ki isLoggedIn hogya (maanlo ki agar merko poore app mei chahiye ki user loggedin hai ya nahi)
// Yeh kaafi baar use hota hai ki globally handle karna pdta hai tumhe login state 
// globally handle mtlb ki maine global state bnadi 

// createContext mei tum kuch bhi de sakte ho, but as a good practice you give default value 

const AppContext = createContext({
    message: "",
});
// Without declaring this structure (empty message), VS code won't be able to recognise ".message"
// But agar empty "meesage" diya, toh VS code show karega 
// Yeh iss wajah se VS code .meesage suggest krega, kyuki yahan pe VS code ko pata chla ki iske context ki "message" property bhi hai

// Toh better rehta hai ki tum context mei bhi apna value ka structure define kardo, 
// and value mei voh paas kardo

export default AppContext;