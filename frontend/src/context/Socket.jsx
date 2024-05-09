import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Auth } from "./Auth";
import { io } from "socket.io-client";

export const SocketContext = createContext({});

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUser, setOnlineUser] = useState([]);
  const { auth } = useContext(Auth);
  console.log(onlineUser, "This users are online currently");

  useEffect(() => {
    if (auth) {
      const socket = io("http://localhost:8000", {
        query: {
          userId: auth._id,
        },
      });
      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        setOnlineUser(users);
      });

      return () => {
        // Cleanup function
        socket.close();
        setSocket(null);
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [auth]);

  return (
    <SocketContext.Provider value={{ socket, onlineUser }}>
      {children}
    </SocketContext.Provider>
  );
};

SocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
