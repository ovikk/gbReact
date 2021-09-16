import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
import clsx from "clsx";
import moment from "moment";
import { db } from "../App";
import { useObjectVal } from "react-firebase-hooks/database";

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

  selectedChat: {
    backgroundColor: "#B1B1B1",
    "&:hover": {
      backgroundColor: "#B1B1B1",
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

const ChatPreview = ({ uid }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  // const { avatar, name, id } = profile;
  const [snapshot, loading, error] = useObjectVal(
    db.ref("profiles").child(uid)
  );

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (snapshot) {
    const { name, surName } = snapshot;

    const locationSplitted = location.pathname.split("/");

    const isSelected =
      locationSplitted[1] === "chat" && locationSplitted[2] === uid;

    // const lastMessage =
    //   messages.length > 0
    //     ? messages[messages.length - 1]
    //     : { text: "", timeStamp: null };

    return (
      <Box
        // className={classes.mainWrapper}
        className={clsx(classes.mainWrapper, {
          [classes.selectedChat]: isSelected,
        })}
        onClick={() => history.push(`/chat/${uid}`)}
      >
        <Avatar alt="Remy Sharp" src={null} />

        <Box className={classes.midddleContentWrapper}>
          <Typography variant="h6" className={classes.overFlowText}>
            {name} {surName}
          </Typography>
          <Typography variant="subtitle1" className={classes.overFlowText}>
            {/* {lastMessage.text} */}
          </Typography>
        </Box>

        <Box className={classes.rightContentWrapper}>
          <Typography variant="caption">
            {/* {moment(lastMessage.timeStamp).format("H:mm")} */}
          </Typography>
        </Box>
      </Box>
    );
  }

  return null;
};

export default ChatPreview;
