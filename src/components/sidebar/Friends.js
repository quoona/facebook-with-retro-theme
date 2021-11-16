import React from "react";
import "./friends.css";
import "nes.css/css/nes.min.css";
import cat from "../../images/cat.jpg";
import night from "../../images/night.png";
import girl from "../../images/girl.png";
import mountain from "../../images/mountain.png";
import cat2 from "../../images/cat2.jpg";
import FriendInfo from "./FriendInfo";
function Friends() {
  return (
    <div className="f">
      <div className="f-top-sidebar">
        <div className="f-contact">
          <p>Contact</p>

          {/* <div className="f-list-friends">
            <div className="f-avatar">
              <img
                src={avatar}
                alt=""
                className="avatar nes-avatar is-rounded is-medium"
              />
              <p className="username">{username}</p>
            </div>
          </div> */}

          <div className="f-wrapper">
            <div className="f-option">
              <i class="nes-icon size-1x search"></i>
            </div>
            <div className="f-option">
              <i class="nes-icon size-1x youtube-square"></i>
            </div>
            <div className="f-option">
              <i class="nes-icon size-1x bars"></i>
            </div>
          </div>
        </div>
      </div>
      <FriendInfo avatar={cat} username="Quoonaa" />
      <FriendInfo avatar={night} username="Night" />
      <FriendInfo avatar={girl} username="Thu Uyen" />
      <FriendInfo avatar={mountain} username="Mountain" />
      <FriendInfo avatar={cat2} username="Cat 2" />
      <FriendInfo avatar={cat} username="quoonaa" />
      <FriendInfo avatar={girl} username="May" />
      <FriendInfo avatar={cat} username="Nguyen Quoc Nam" />
      <FriendInfo avatar={cat} username="quoonaa" />
      <FriendInfo avatar={mountain} username="quoonaa" />
      <FriendInfo avatar={cat} username="quoonaa" />
      <FriendInfo avatar={cat2} username="quoonaa" />
    </div>
  );
}

export default Friends;
