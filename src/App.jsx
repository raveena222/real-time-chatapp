import "./App.css";
import "./styles/responsive.css";
import { useEffect } from "react";
import Home from "./Home";
import LoginPage from "./userAuth/LoginPage.jsx";
import Notification from "./userAuth/Notification.jsx";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./backend/firebase.js";
// import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  // const [tog, setTog] = useState(false);
  // function handleTog() {
  //   setTog(!tog);
  // }

  const user= false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user)=>{
      console.log(user);
    });
  })

  function handleTogs() {
    setTogs(!togs);
  }

  return (
    <>
      {/* <div className="App"> */}
         {user ? (<Home/>)
         :(<LoginPage/>)}
      {/* </div> */}
      <Notification/>
    </>
  );
}

export default App;
