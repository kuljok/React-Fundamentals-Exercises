import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");

  const updateText = (text) => setText(text);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input type="text" placeholder="Say Something" onChange={(event) => updateText(event.target.value)} />
        <p className="echo">Echo:</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default App;
