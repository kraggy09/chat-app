import { createContext, useState } from "react";

export const CurrentChat = createContext({});

const CurrentChatProvider = ({ children }) => {
  const [currentChat, setCurrentChat] = useState(null);
  return (
    <CurrentChat.Provider value={{ currentChat, setCurrentChat }}>
      {children}
    </CurrentChat.Provider>
  );
};

export default CurrentChatProvider;
