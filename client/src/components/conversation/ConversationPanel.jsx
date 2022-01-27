import ConversationHeader from "./ConversationHeader";
import ConversationMessages from "./ConversationMessages";
import ConversationFooter from "./ConversationFooter";

const ConversationPanel = () => {
  return (
    <>
      <ConversationHeader />
      <ConversationMessages />
      <ConversationFooter />
    </>
  );
};

export default ConversationPanel;
