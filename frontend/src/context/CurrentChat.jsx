import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CurrentChat = createContext({});

const CurrentChatProvider = ({ children }) => {
  const [currentChat, setCurrentChat] = useState(null);

  return (
    <CurrentChat.Provider value={{ currentChat, setCurrentChat }}>
      {children}
    </CurrentChat.Provider>
  );
};

CurrentChatProvider.propTypes = {
  children: PropTypes.element,
};

export default CurrentChatProvider;
