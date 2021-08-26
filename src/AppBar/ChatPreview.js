import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    width: "100%",
    margin: "10px 0px",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    borderRadius: "20px",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#F1F1F1",
    },
  },

  midddleContentWrapper: {
    marginLeft: "15px",
    width: "65%",
    height: "100%",
  },

  rightContentWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    margin: "0px 10px",
  },

  overFlowText: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
    height: "30px",
  },
}));

const ChatPreview = ({ chat }) => {
  const classes = useStyles();
  const history = useHistory();

  const { avatarUrl, name, messagesArray, id } = chat;

  const lastMessage =
    messagesArray.length > 0
      ? messagesArray[messagesArray.length - 1]
      : { text: "", timeStamp: null };

  const unreadMessagesCount = messagesArray.reduce((acc, message) => {
    if (message.userId === id && !message.isRead) {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <Box
      className={classes.mainWrapper}
      onClick={() => history.push(`/chat/${id}`)}
    >
      <Avatar alt="Remy Sharp" src={avatarUrl} />

      <Box className={classes.midddleContentWrapper}>
        <Typography variant="h6" className={classes.overFlowText}>
          {name}
        </Typography>
        <Typography variant="subtitle1" className={classes.overFlowText}>
          {lastMessage.text}
        </Typography>
      </Box>

      <Box className={classes.rightContentWrapper}>
        <Typography variant="caption">
          {lastMessage.timeStamp.format("h:mm")}
        </Typography>
        <Typography variant="subtitle1">
          {unreadMessagesCount > 0 && unreadMessagesCount}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatPreview;
