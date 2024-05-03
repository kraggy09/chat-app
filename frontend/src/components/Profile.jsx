import PropTypes from "prop-types";
const Profile = ({ profile }) => {
  return (
    <div>
      <img className="h-12 hover:cursor-pointer" src={profile} alt="profile" />
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.string.isRequired,
};

export default Profile;
