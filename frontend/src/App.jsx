import Home from "./pages/Home";
import CurrentChatProvider from "./context/CurrentChat";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <BrowserRouter>
        <CurrentChatProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </CurrentChatProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
