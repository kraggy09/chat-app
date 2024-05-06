import { useContext } from "react";
import PropTypes from "prop-types";
import { CurrentChat } from "../context/CurrentChat";

const Conversation = ({ chat }) => {
  const { currentChat, setCurrentChat } = useContext(CurrentChat);
  console.log(currentChat);
  return (
    <div className="max-h-[60vh] overflow-y-scroll scrollbar-hide">
      <div className="min-w-full flex flex-col items-start lg:gap-y-1">
        {chat?.map((per, index) => {
          return (
            <div
              onClick={() => setCurrentChat(per)}
              key={per._id}
              className="  hover:cursor-pointer min-w-full flex items-start flex-col"
            >
              <div
                className={`flex items-center justify-start min-w-full gap-x-4 rounded-lg hover:bg-sky-500 hover:text-white  py-2 px-2 lg:gap-y-4 ${
                  per._id === currentChat?._id ? "bg-sky-500 text-white" : ""
                }`}
              >
                <img src={per.profilepic} className="h-12 lg:h-14" alt="" />
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
