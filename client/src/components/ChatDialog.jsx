import { useContext } from "react";
import { Dialog, Box } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";

// import { UserContext } from "../../context/UserProvider";

//components
import ChatListPanel from "./chat/ChatListPanel";
import ConversationPanel from "./conversation/ConversationPanel";
// import Menu from "./menu/Menu";
// import ChatBox from "./chat/ChatBox";

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  leftComponent: {
    minWidth: "21rem",
  },
  rightComponent: {
    width: "70%",
    minWidth: "21rem",
    height: "100%",
    borderLeft: "1px solid rgba(0, 0, 0, 0.14)",
  },
});

const style = {
  dialogPaper: {
    height: "95%",
    width: "91%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 0,
    boxShadow: "none",
    overflow: "hidden",
  },
  dialogRoot: {
    zIndex: "1200",
  },
};

const ChatDialog = ({ classes }) => {
  const classname = useStyles();

  // const { person } = useContext(UserContext);

  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <ChatListPanel />
        </Box>
        <Box className={classname.rightComponent}>
          <ConversationPanel />
          {/* {Object.keys(person).length ? <ChatBox /> : <EmptyChat />} */}
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(ChatDialog);
