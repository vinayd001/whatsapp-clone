import { useContext } from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AccountContext } from "../context/AccountProvider";

// components
import ChatDialog from "./ChatDialog";
import LoginDialog from "./LoginDialog";

const useStyles = makeStyles({
  component: {
    height: "100vh",
    background: "#DCDCDC",
  },
  header: {
    background: "#128C7E",
    height: 115,
    boxShadow: "none",
  },
  loginHeader: {
    background: "#00bfa5",
    height: 200,
    boxShadow: "none",
  },
});

const Messenger = () => {
  const classes = useStyles();
  const { account } = useContext(AccountContext);
  return (
    <Box className={classes.component}>
      <AppBar className={account ? classes.header : classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>
      {account ? <ChatDialog /> : <LoginDialog />}
    </Box>
  );
};

export default Messenger;
