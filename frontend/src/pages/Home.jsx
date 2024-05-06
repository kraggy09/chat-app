import { useContext } from "react";
import MainChat from "../components/MainChat";
import SideBar from "../components/SideBar";
import { CurrentChat } from "../context/CurrentChat";

const Home = () => {
  const { currentChat } = useContext(CurrentChat);
  return (
    <div className="flex  md:h-[600px] lg:h-[630px]   min-w-[85vw] md:min-w-[90vw] lg:min-w-[70%] rounded-lg bg-gray-400 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
      <div className=" lg:min-w-[50%] md:hidden block min-w-[100%]  md:min-w-[45%]">
        {currentChat ? <MainChat /> : <SideBar />}
      </div>
      <div className=" min-w-full hidden md:flex  gap-x-6 ">
        <div className="min-w-[43%] lg:min-w-[40%]">
          <SideBar />
        </div>
        {currentChat ? (
          <MainChat />
        ) : (
          <div className="grid items-center justify-center min-w-[40vw]">
            <div className="flex flex-col text-white items-center justify-center">
              <h1 className="text-xl my-3 "> Hello Kaif Shaikh</h1>
              <p className="px-16 text-center">
                Please select a person to start chatting with them
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
