import { useState } from "react";
import { Box } from "@mui/material";

// components
import ChatListHeader from "./ChatListHeader";
import ChatListSearch from "./ChatListSearch";
import ChatList from "./ChatList";

const ChatListPanel = () => {
  const [text, setText] = useState("");

  return (
    <Box>
      <Box>
        <ChatListHeader />
        <ChatListSearch setText={setText} />
        <ChatList text={text} />
      </Box>
    </Box>
  );
};

export default ChatListPanel;
