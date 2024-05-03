import { useContext } from "react";
import ChatHeader from "./ChatHeader";
import { IoSend } from "react-icons/io5";
import MessageContainer from "./MessageContainer";
import { CurrentChat } from "../context/CurrentChat";
const MainChat = () => {
  const { currentChat } = useContext(CurrentChat);
  return (
    <>
      <div className="min-w-[48vw]   lg:min-w-[38vw]">
        <ChatHeader
          profile={"https://avatar.iran.liara.run/public/boy?username=kraggy"}
          name={"Sufiyan"}
        />
        <MessageContainer />
        <form className="flex min-w-full items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input lg:min-w-[90%]  my-2 mx-2 bg-white text-black  rounded-xl"
          />
          <button
            type="submit"
            className="bg-sky-500 px-4 py-4 rounded-xl text-white"
          >
            <IoSend />
          </button>
        </form>
      </div>
    </>
  );
};

export default MainChat;
