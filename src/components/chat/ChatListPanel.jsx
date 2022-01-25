import ChatListHeader from "./ChatListHeader";
import ChatListSearch from "./ChatListSearch";
import ChatList from "./ChatList";

const ChatListPanel = () => {
  return (
    <>
      <ChatListHeader />
      <ChatListSearch />
      <ChatList />
    </>
  );
};

export default ChatListPanel;
