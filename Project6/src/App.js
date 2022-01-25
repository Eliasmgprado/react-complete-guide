import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button";
import "./App.css";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

function App() {
  const [showPar, setShowPar] = useState(false);

  const toggleParHandler = useCallback(() => {
    setShowPar((prevShowPar) => {
      return !prevShowPar;
    });
  }, []);
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPar} />
      <Button onClick={toggleParHandler}> </Button>
    </div>
  );
}

export default App;
