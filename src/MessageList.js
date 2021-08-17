import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  messageList: {
    width: "100%",
    height: "90%",
    borderBottom: "1px solid black",
  },
}));

const MessageList = ({ messagesArray }) => {
  const classes = useStyles();

  return (
    <div className={classes.messageList}>
      {messagesArray.map((message, i) => (
        <div key={i}>{message}</div>
      ))}
    </div>
  );
};

MessageList.propTypes = {
  messagesArray: PropTypes.array.isRequired,
};

export default MessageList;
