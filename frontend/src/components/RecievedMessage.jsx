import PropTypes from "prop-types";
import { getTime } from "../constant";
const RecievedMessage = ({ message, profilePic }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className="chat-bubble  text-black text-sm md:text-base bg-white max-w-[180px]  md:max-w-[250px]">
        {message.message}
      </div>
      <div className="chat-footer">{getTime(message.createdAt)}</div>
    </div>
  );
};
RecievedMessage.propTypes = {
  message: PropTypes.object.isRequired,
  profilePic: PropTypes.string.isRequired,
};

export default RecievedMessage;
