import ChatHeader from "./ChatHeader";
import MessageContainer from "./MessageContainer";

const MainChat = () => {
  return (
    <div className="max-w-[30vw] min-w-[30vw]">
      <ChatHeader />
      <MessageContainer />
    </div>
  );
};

export default MainChat;
