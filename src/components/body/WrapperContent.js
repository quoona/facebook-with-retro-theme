import React from "react";
import News from "../postcontent/News";
import Post from "../postcontent/Post";
import "./wrappercontent.css";
function WrapperContent() {
  return (
    <div className="wc">
      <Post />
      <News />
    </div>
  );
}

export default WrapperContent;
