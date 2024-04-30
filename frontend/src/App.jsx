import Home from "./pages/Home";
import CurrentChatProvider from "./context/CurrentChat";

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <CurrentChatProvider>
        <Home />
      </CurrentChatProvider>
    </div>
  );
};

export default App;
