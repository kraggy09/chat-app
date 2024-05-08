import axios from "axios";
import ChatHeader from "./ChatHeader";

import { IoIosArrowBack } from "react-icons/io";

import { useContext, useState } from "react";
import { IoSend } from "react-icons/io5";
import MessageContainer from "./MessageContainer";
import { CurrentChat } from "../context/CurrentChat";
const MainChat = () => {
  const { currentChat, setCurrentChat, setSelectedChat } =
    useContext(CurrentChat);
  const [newMsg, setNewMsg] = useState("");

  const handleMessage = async () => {
    setNewMsg("");
    const res = await axios.post(
      "/api/v1/chat/send-message/" + currentChat.info._id,
      { message: newMsg },
      {
        withCredentials: true, // Include credentials (cookies)
        headers: {
          "Content-Type": "application/json", // Specify content type
        },
      }
    );
    console.log(res);
    let newChat = {
      info: currentChat.info,
      messages: [...currentChat.messages, res.data.message],
    };
    setCurrentChat(newChat);
  };

  return (
    <>
      <div className="min-w-[48vw]   lg:min-w-[38vw]">
        <div className="flex items-center ">
          <span
            className="text-3xl ml-2 md:hidden block"
            onClick={() => {
              setCurrentChat({ info: {}, messages: [] });
              setSelectedChat(false);
            }}
          >
            <IoIosArrowBack />
          </span>
          <ChatHeader
            profile={currentChat.info.profilepic}
            name={currentChat.info.fullName}
          />
        </div>

        <div className="divider "></div>
        <MessageContainer />
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex min-w-full items-center gap-2"
        >
          <input
            type="text"
            value={newMsg}
            onChange={(e) => {
              let change = e.target.value;
              setNewMsg(change);
            }}
            placeholder="Search"
            className="input lg:min-w-[90%]  my-2 mx-2 bg-white text-black  rounded-xl"
          />
          <button
            onClick={() => {
              handleMessage();
            }}
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
