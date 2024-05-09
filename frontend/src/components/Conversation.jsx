import { useContext } from "react";
import PropTypes from "prop-types";
import { CurrentChat } from "../context/CurrentChat";
import axios from "axios";
import toast from "react-hot-toast";
import { SocketContext } from "../context/Socket";
import useListenMessage from "../hooks/useListenMessage";

const Conversation = ({ chat }) => {
  const { currentChat, setSelectedChat, setCurrentChat } =
    useContext(CurrentChat);
  const { onlineUser } = useContext(SocketContext);

  useListenMessage();

  return (
    <div className="max-h-[60vh] overflow-y-scroll scrollbar-hide">
      <div className="min-w-full flex flex-col items-start lg:gap-y-1">
        {chat?.map((per, index) => {
          const isOnline = onlineUser.find((user) => per._id === user);

          if (isOnline) {
            // console.log("Yes we did it");
          }
          return (
            <div
              onClick={async () => {
                try {
                  let res = await axios.post(
                    "http://localhost:8000/api/v1/chat/get-messages/" + per._id,
                    {},
                    {
                      withCredentials: true, // Include credentials (cookies)
                      headers: {
                        "Content-Type": "application/json", // Specify content type
                      },
                    }
                  );

                  let currentChat = {
                    info: { ...per },
                    messages: res.data.messages,
                  };

                  setCurrentChat(currentChat);
                  setSelectedChat(true);
                } catch (error) {
                  toast.success(error?.response?.data?.msg);
                  let chat = {
                    info: { ...per },
                    messages: [],
                  };

                  setCurrentChat(chat);
                  setSelectedChat(true);

                  console.log(error.message);
                }
              }}
              key={per._id}
              className="  hover:cursor-pointer min-w-full flex items-start flex-col"
            >
              <div
                className={`flex items-center justify-start min-w-full gap-x-4 rounded-lg hover:bg-sky-500 hover:text-white  py-2 px-2 lg:gap-y-4 ${
                  per._id === currentChat?._id ? "bg-sky-500 text-white" : ""
                }`}
              >
                <div className={`avatar  ${isOnline ? "online" : ""}`}>
                  <div className="w-12 md:w-16 rounded-full">
                    <img
                      src={per.profilepic}
                      className=""
                      alt="user avatar
                    "
                    />
                  </div>
                </div>
                <p className="font-semibold capitalize lg:text-lg text-white">
                  {per.fullName}
                </p>
              </div>
              {index !== chat?.length - 1 && (
                <div className=" divider  lg:min-w-[15vw] 	mt-0 mb-0 px-3"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Conversation.propTypes = {
  chat: PropTypes.array,
};
export default Conversation;
