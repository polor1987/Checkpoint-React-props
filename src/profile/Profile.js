import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div className="profile">
      {props.handelName()}
      <img src={props.img} alt="Profile" />
      <div className="full-name">{`FullName: ${props.fullName}`}</div>
      <div className="bio">{`Bio: ${props.bio}`}</div>
      <div className="profession">{`Profession: ${props.profession}`}</div>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  handelName: PropTypes.func.isRequired,
};

export default Profile;
