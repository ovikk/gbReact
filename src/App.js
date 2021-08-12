import React, { useState } from "react";
import "./App.css";
import MyComponent from "./MyComponent";


function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{
          width: 400,
          height: 100,
          color: "red",
        }}
      />

      <MyComponent textToShow={inputText} />
    </div>
  );
}

export default App;
