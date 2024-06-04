import "./App.css";
import NavBar from "./NavBar";
import "./styles/responsive.css";
import { useState } from "react";
import Home from "./Home";

function App() {
  const [tog, setTog] = useState(false);

  function handleTog() {
    setTog(!tog);
  }

  return (
    <>
      <div className="App">
        <NavBar />
        <Home handleTog={handleTog} tog={tog} />
      </div>
    </>
  );
}

export default App;
