import React from "react";
import "./friendinfo.css";
function FriendInfo({ avatar, username }) {
  return (
    <div className="f-list-friends">
      <div className="f-avatar">
        <img
          src={avatar}
          alt=""
          className="avatar nes-avatar is-rounded is-medium"
        />
        <p className="username">{username}</p>
      </div>
    </div>
  );
}

export default FriendInfo;
