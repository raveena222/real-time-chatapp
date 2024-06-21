import "./App.css";
<<<<<<< HEAD
import "./styles/responsive.css";
import { useEffect } from "react";
=======
import { useState } from "react";
>>>>>>> 66fbdb00c3e5c2b7db9c08ec7efe69846db6e027
import Home from "./Home";
import LoginPage from "./userAuth/LoginPage.jsx";
import Notification from "./userAuth/Notification.jsx";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "./backend/firebase.js";
// import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
<<<<<<< HEAD
  // const [tog, setTog] = useState(false);
  // function handleTog() {
  //   setTog(!tog);
  // }
=======
  const [tog, setTog] = useState(false);
  const [togs, setTogs] = useState(false);
>>>>>>> 66fbdb00c3e5c2b7db9c08ec7efe69846db6e027

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
<<<<<<< HEAD
      {/* <div className="App"> */}
         {user ? (<Home/>)
         :(<LoginPage/>)}
      {/* </div> */}
      <Notification/>
=======
      <div className="App">
        <Home handleTogs={handleTogs} handleTog={handleTog} tog={tog} togs={togs}/>
      </div>
>>>>>>> 66fbdb00c3e5c2b7db9c08ec7efe69846db6e027
    </>
  );
}

export default App;
