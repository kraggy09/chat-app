import { useContext } from "react";
import MainChat from "../components/MainChat";
import SideBar from "../components/SideBar";
import { CurrentChat } from "../context/CurrentChat";

const Home = () => {
  const { currentChat } = useContext(CurrentChat);
  return (
    <div className="flex sm:h-[70vw] md:h-[70vw]  lg:h-[620px] min-w-[85vw] md:min-w-[70vw] rounded-lg bg-gray-400 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
      <div className=" lg:min-w-[45%] min-w-[100%] relative md:min-w-[45%]">
        <SideBar />
      </div>
      <MainChat />
    </div>
  );
};

export default Home;
