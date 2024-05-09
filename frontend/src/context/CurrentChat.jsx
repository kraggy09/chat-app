import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CurrentChat = createContext({});

const CurrentChatProvider = ({ children }) => {
  const [currentChat, setCurrentChat] = useState({ info: {}, message: [] });
  const [selectedChat, setSelectedChat] = useState(false);
  // console.log("current chat", currentChat);

  return (
    <CurrentChat.Provider
      value={{ currentChat, setCurrentChat, selectedChat, setSelectedChat }}
    >
      {children}
    </CurrentChat.Provider>
  );
};

CurrentChatProvider.propTypes = {
  children: PropTypes.element,
};

export default CurrentChatProvider;
