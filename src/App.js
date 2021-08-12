import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const [inputMessage, setInputMessage] = useState("");
  const [messagesArray, setMessagesArray] = useState([]);

  const onSendMessage = () => {
    setMessagesArray((prev) => [...prev, inputMessage]);
    setInputMessage("");
  };

  return (
    <div className="mainWrapper">
      <div className="messageList">
        {messagesArray.map((message, i) => (
          <div key={i}>{message}</div>
        ))}
      </div>

      <div className="inputWrapper">
        <input
          className="input"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={({key}) => {
            if (key === 'Enter') {
              console.log('Enter')
              onSendMessage();
            }
          }}
        />
        <button onClick={onSendMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default App;
