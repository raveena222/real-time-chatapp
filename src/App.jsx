import "./App.css";
import { useState } from "react";
import Home from "./Home";

function App() {
  const [tog, setTog] = useState(false);
  const [togs, setTogs] = useState(false);

  function handleTog() {
    setTog(!tog);
  }

  function handleTogs() {
    setTogs(!togs);
  }

  return (
    <>
      <div className="App">
        <Home handleTogs={handleTogs} handleTog={handleTog} tog={tog} togs={togs}/>
      </div>
    </>
  );
}

export default App;
