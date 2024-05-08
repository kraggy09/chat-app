import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Auth } from "./context/Auth";
import { useContext, useEffect } from "react";
import { CurrentChat } from "./context/CurrentChat";

const App = () => {
  const { auth } = useContext(Auth);
  const { setCurrentChat } = useContext(CurrentChat);
  useEffect(() => {
    setCurrentChat({ info: {}, messages: [] });
  }, []);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={auth ? <Home /> : <Login />}></Route>
          <Route
            path="/signup"
            element={auth ? <Navigate to={"/"} /> : <SignUp />}
          ></Route>
          <Route
            path="/login"
            element={auth ? <Navigate to={"/"} /> : <Login />}
          ></Route>
        </Routes>

        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
