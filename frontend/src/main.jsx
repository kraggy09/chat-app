import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/Auth.jsx";
import CurrentChatProvider from "./context/CurrentChat.jsx";
import { SocketProvider } from "./context/Socket.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentChatProvider>
      <AuthProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </AuthProvider>
    </CurrentChatProvider>
  </React.StrictMode>
);
