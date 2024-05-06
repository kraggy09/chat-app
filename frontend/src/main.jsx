import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/Auth.jsx";
import CurrentChatProvider from "./context/CurrentChat.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentChatProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CurrentChatProvider>
  </React.StrictMode>
);
