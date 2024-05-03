import Profile from "./Profile";
import PropTypes from "prop-types";

const ChatHeader = ({ name, profile }) => {
  return (
    <div>
      <div className="py-1 flex items-center min-w-full justify-start ml-6">
        <Profile profile={profile} />
        <h1 className="px-2 text-xl font-bold lg:text-3xl text-white">
          {name}
        </h1>
      </div>
      <div className="divider "></div>
    </div>
  );
};

ChatHeader.propTypes = {
  name: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
};

export default ChatHeader;
