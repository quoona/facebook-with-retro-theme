import React from "react";
import "./friends.css";
import "nes.css/css/nes.min.css";
import cat from "../../images/cat.jpg";
function Friends() {
  return (
    <div className="f">
      <div className="f-top-sidebar">
        <div className="f-contact">
          <p>Contact</p>
          <div className="f-list-friends">
            <div className="f-avatar">
              <img
                src={cat}
                alt=""
                className="avatar nes-avatar is-rounded is-medium"
              />
              <p className="username">Quoonaa</p>
            </div>

            <div className="f-avatar">
              <img
                src={cat}
                alt=""
                className="avatar nes-avatar is-rounded is-medium"
              />
              <p className="username">Quoonaa</p>
            </div>

            <div className="f-avatar">
              <img
                src={cat}
                alt=""
                className="avatar nes-avatar is-rounded is-medium"
              />
              <p className="username">Quoonaa</p>
            </div>
            <div className="f-avatar">
              <img
                src={cat}
                alt=""
                className="avatar nes-avatar is-rounded is-medium"
              />
              <p className="username">Quoonaa</p>
            </div>
            <div className="f-avatar">
              <img
                src={cat}
                alt=""
                className="avatar nes-avatar is-rounded is-medium"
              />
              <p className="username">Quoonaa</p>
            </div>
            <div className="f-avatar">
              <img
                src={cat}
                alt=""
                className="avatar nes-avatar is-rounded is-medium"
              />
              <p className="username">Quoonaa</p>
            </div>
            <div className="f-avatar">
              <img
                src={cat}
                alt=""
                className="avatar nes-avatar is-rounded is-medium"
                style={{ imageRendering: "pixelated" }}
              />
              <p className="username">Quoonaa</p>
            </div>
            <div className="f-avatar">
              <img
                src={cat}
                alt=""
                className="avatar nes-avatar is-rounded is-medium"
                style={{ imageRendering: "pixelated" }}
              />
              <p className="username">Quoonaa</p>
            </div>
            <div className="f-avatar">
              <img
                src={cat}
                alt=""
                className="avatar nes-avatar is-rounded is-medium"
                style={{ imageRendering: "pixelated" }}
              />
              <p className="username">Quoonaa</p>
            </div>
            <div className="f-avatar">
              <img
                src={cat}
                alt=""
                className="avatar nes-avatar is-rounded is-medium"
                style={{ imageRendering: "pixelated" }}
              />
              <p className="username">Quoonaa</p>
            </div>
          </div>
        </div>
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
  );
}

export default Friends;
