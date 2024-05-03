import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";

const MessageContainer = () => {
  return (
    <div className="flex max-h-[60vh] scrollbar-hide md:max-h-[65vh] overflow-hidden  flex-col gap-y-3 overflow-y-auto">
      <RecievedMessage />
      <RecievedMessage />
      <RecievedMessage />
      <RecievedMessage />
      <RecievedMessage />
      <RecievedMessage />
      <RecievedMessage />
      <SentMessage />
    </div>
  );
};

export default MessageContainer;
