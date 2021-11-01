import React from "react";
import "./post.css";
import "nes.css/css/nes.min.css";
import cat from "../../images/cat.jpg";
function Post() {
  return (
    <div className="p">
      <div className="nes-container with-title">
        <h3 className="title">Posts</h3>
        <div className="p-top">
          <img
            src={cat}
            alt=""
            className="p-avatar nes-avatar is-rounded is-medium"
          />
          <p>11/1/2021</p>
        </div>
        <div className="p-input">
          <input
            type="text"
            id="name_field"
            className="nes-input"
            placeholder={`What's on your mind ? :)`}
          />
        </div>
        <div className="p-optional-wrapper">
          <div className="p-optional">
            <i class="nes-icon size-1x check"></i>
            <p>Post</p>
          </div>
          <div className="p-optional">
            <i class="nes-icon size-1x folder"></i>
            <p>Photos</p>
          </div>
          <div className="p-optional">
            <i class="nes-icon size-1x youtube-square"></i>
            <p>Live</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
