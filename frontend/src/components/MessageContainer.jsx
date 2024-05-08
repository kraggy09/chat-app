import { useContext, useEffect, useRef } from "react";
import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";
import { Auth } from "../context/Auth";
import { CurrentChat } from "../context/CurrentChat";

const MessageContainer = () => {
  const { auth } = useContext(Auth);
  const { currentChat } = useContext(CurrentChat);
  const ref = useRef();
  useEffect(() => {
    const scrollToBottom = () => {
      ref.current.scrollTop = ref.current.scrollHeight;
    };

    scrollToBottom();
  }, [currentChat]);
  return (
    <div
      ref={ref}
      className="flex max-h-[60vh] min-h-[60vh] md:min-h-[65vh] scrollbar-hide md:max-h-[65vh] overflow-hidden  flex-col gap-y-3 overflow-y-auto"
    >
      {currentChat &&
        currentChat?.messages?.map((message) => {
          if (message.senderId === auth._id) {
            return (
              <SentMessage
                message={message}
                profilePic={auth.profilepic}
                key={message._id}
              />
            );
          } else {
            return (
              <RecievedMessage
                profilePic={currentChat.info.profilepic}
                message={message}
                key={message._id}
              />
            );
          }
        })}
    </div>
  );
};

export default MessageContainer;
