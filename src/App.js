import { useContext } from "react"; 
import AppContext from "./store/app-context";

// In case of high level apps, you're gonna have many multiple components 
// Passing certain states or functions as props from app to multiple components is a very tedious task 

// Maanlo tum kisi app pe kaam kar rahe ho jismei 10-15 components hain, bhot bda component tree hai 
// Usmei tumhare paas kahin koi state defined hai, usse tumhe change karna hai kisi aur component mei 
// That is actually alot of work for you, ki tum yahan se behjre ho fir vahan se aara hai wapis taaki usko parameters mil sake

// Context yehi problme solve karta hai
// Context kya karega na ki voh tumhari app ko wrap karlega 
// Tum context mei kuch bhi define kar sakte ho, string, object, 
// Even though tum is se link kar sakte ho ek state, aur uss state ko hanlde karte hue tum same cheez kar sakte ho
// Toh tumhe zrurat he nhi pdegi ki yahan state define karo aur usko aage aage paas karo
// Basically props ke through bhejne ki zrurat nhi pdegi, mai directly wrapped elements ke ander kahi se bhi state change kar paunga 
// This feature is known as "CONTEXT API"

// App() ke top pe context provide karna pdega 
// App ke top pe kya hai index.js
// wahan pe import karunga AppContext ko

function App() {
  const ctx = useContext(AppContext);
  console.log(ctx);
  // useContext is used to extract value of context created using createContext

  return <h1>{ctx.message}</h1>
}

export default App;
