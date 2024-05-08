import PropTypes from "prop-types";
import { getTime } from "../constant";
const SentMessage = ({ message, profilePic }) => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>

      <div className="chat-bubble text-white text-sm md:text-base bg-sky-500 max-w-[180px]  md:max-w-[250px]">
        {message.message}
      </div>
      <div className="chat-footer">{getTime(message.createdAt)}</div>
    </div>
  );
};

SentMessage.propTypes = {
  message: PropTypes.object.isRequired,
  profilePic: PropTypes.string.isRequired,
};

export default SentMessage;
