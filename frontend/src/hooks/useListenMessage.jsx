import { useContext, useEffect } from "react";
import { SocketContext } from "../context/Socket";
import { CurrentChat } from "../context/CurrentChat";
import notificationSound from "../../public/notification.mp3";

const useListenMessage = () => {
  const { socket } = useContext(SocketContext);
  const { setCurrentChat, currentChat } = useContext(CurrentChat);
  useEffect(() => {
    socket?.on("newMessage", (sentMessage) => {
      console.log(sentMessage.message, "this is the message");
      sentMessage.shouldShake = true;
      let currentInfo = currentChat?.info;
      let currentMessages = currentChat?.messages || []; // Initialize as empty array if undefined
      let newMessages = [...currentMessages, sentMessage]; // Create new array with new message
      let newChat = {
        info: { ...currentInfo },
        messages: newMessages, // Assign the new array
      };
      const audio = new Audio(notificationSound);
      audio.play();

      setCurrentChat(newChat);
    });

    return () => {
      socket?.off("newMessage");
    };
  }, [currentChat, socket]);
};

export default useListenMessage;
