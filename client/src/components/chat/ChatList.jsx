import React, { useState, useEffect, useContext, useRef } from "react";
import { Box, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { AccountContext } from "../../context/AccountProvider";

//components
// import Conversation from "./Conversation";
import { getUsers, getChatList } from "../../service/api";
import ChatBox from "./ChatBox";

const useStyles = makeStyles({
  component: {
    overflow: "overlay",
    height: "81vh",
  },
  divider: {
    margin: "0 0 0 67px",
    backgroundColor: "#F2F2F2",
  },
});

const ChatList = ({ text }) => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [chatList, setChatList] = useState([]);

  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      console.log(data);
      const filteredData = data?.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredData);
    };
    fetchData();
  }, [text]);

  // useEffect(() => {
  //   const fetchChatList = async () => {
  //     const data = await getChatList({ senderId: account.googleId });
  //     console.log("fetchChatList", data);
  //     // const filteredData = data?.filter((user) =>
  //     //   user.name.toLowerCase().includes(text.toLowerCase())
  //     // );
  //     setChatList(data);
  //   };
  //   fetchChatList();
  // }, [account]);

  // useEffect(() => {
  //   socket.current.emit("addUser", account.googleId);
  //   socket.current.on("getUsers", (users) => {
  //     setActiveUsers(users);
  //   });
  // }, [account, setActiveUsers, socket]);

  return (
    <Box className={classes.component}>
      {users?.map(
        (user, index) =>
          user.googleId !== account.googleId && (
            <React.Fragment key={user._id}>
              <ChatBox user={user} key={user._id} />
              {users.length !== index + 1 ? (
                <Divider className={classes.divider} />
              ) : null}
            </React.Fragment>
          )
      )}
      {/* {chatList ? (
        <div>{chatList}</div>
      ) : (
        <div>
          Search for a user in the above search bar to start a conversation
        </div>
      )} */}
    </Box>
  );
};

export default ChatList;
