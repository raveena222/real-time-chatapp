import "./App.css";
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
        <Home handleTog={handleTog} tog={tog} />
      </div>
    </>
  );
}

export default App;
