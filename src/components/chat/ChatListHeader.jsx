import { useContext, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
// import MessageIcon from "@mui/icons-material/Message";

import { AccountContext } from "../../context/AccountProvider";

//components
import ChatListMenuDropDown from "./ChatListMenuDropDown";
// import HeaderMenu from "./HeaderMenu";
// import InfoDrawer from "../../drawer/Drawer";

const useStyles = makeStyles({
  header: {
    height: 35,
    background: "#ededed",
    display: "flex",
    padding: "10px 16px",
    alignItems: "center",
  },
  chatIcons: {
    marginLeft: "auto",
    "& > *": {
      marginLeft: 2,
      padding: 8,
      color: "#919191",
    },
    "& :first-child": {
      fontSize: 22,
      marginRight: 8,
      marginTop: 3,
    },
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: "50%",
  },
});

const ChatListHeader = () => {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  const { account } = useContext(AccountContext);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <Box className={classes.header}>
        <img
          src={account.imageUrl}
          alt="profile"
          className={classes.avatar}
          onClick={() => toggleDrawer()}
        />
        <Box className={classes.chatIcons}>
          <StatusIcon />
          <MessageIcon />
          <ChatListMenuDropDown />
        </Box>
      </Box>
      {/* <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} /> */}
    </>
  );
};

export const MessageIcon = () => {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className="">
      <path
        fill="currentColor"
        d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
      ></path>
    </svg>
  );
};

export const StatusIcon = () => {
  return (
    <>
      <svg
        version="1.1"
        id="ee51d023-7db6-4950-baf7-c34874b80976"
        x="0"
        y="0"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className=""
      >
        <path
          fill="currentColor"
          d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"
        ></path>
      </svg>
    </>
  );
};

export const StatusIconWithDot = () => {
  return (
    <svg
      version="1.1"
      id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
      x="0"
      y="0"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className=""
    >
      <path
        fill="currentColor"
        d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"
      ></path>
      <path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
    </svg>
  );
};

export default ChatListHeader;
