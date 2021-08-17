import React, { useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appWrapper: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  componentWrapper: {
    width: "600px",
    height: "800px",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
  },
}));

function App() {
  const [messagesArray, setMessagesArray] = useState([]);

  const classes = useStyles();

  const onSendMessage = (messageText) => {
    setMessagesArray((prev) => [...prev, messageText]);
  };

  return (
    <div className={classes.appWrapper}>
      <div className={classes.componentWrapper}>
        <MessageList messagesArray={messagesArray} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
}

export default App;
