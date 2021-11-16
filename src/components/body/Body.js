import React from "react";
import News from "../postcontent/News";
import Post from "../postcontent/Post";
import Friends from "../sidebar/Friends";
import FriendSidebar from "../sidebar/FriendSidebar";
import Sidebar from "../sidebar/Sidebar";
import "./body.css";
import WrapperContent from "./WrapperContent";
function Body() {
  return (
    <div className="b">
      <Sidebar />
      <WrapperContent />
      {/* <FriendSidebar /> */}
      <Friends />
    </div>
  );
}

export default Body;
