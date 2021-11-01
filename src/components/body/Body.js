import React from "react";
import Post from "../postcontent/Post";
import FriendSidebar from "../sidebar/FriendSidebar";
import Sidebar from "../sidebar/Sidebar";
import "./body.css";
function Body() {
  return (
    <div className="b">
      <Sidebar />
      <Post />
      <FriendSidebar />
    </div>
  );
}

export default Body;
