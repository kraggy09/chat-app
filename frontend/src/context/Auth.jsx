import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Auth = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  return <Auth.Provider value={{ auth, setAuth }}>{children}</Auth.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Change PropTypes.element to PropTypes.node
};

export default AuthProvider;
