import React from "react";
import "./sidebaritem.css";

import "nes.css/css/nes.min.css";
import cat from "../../images/cat.jpg";
function SidebarItem() {
  return (
    <div className="sbi">
      <div className="sbi-avatar">
        <img
          src={cat}
          alt=""
          className="nes-avatar is-rounded"
          style={{ imageRendering: "pixelated" }}
        />
        <p>Nguyen Quoc Nam</p>
      </div>
      <div className="sbi-wrapper">
        <div className="sbi-item nes-btn is-warning">
          <i class="nes-icon size-1x user"></i>
          <p>Friends</p>
        </div>
        <div id="btn-0" className="sbi-item nes-btn ">
          <i class="nes-icon size-1x nes"></i>
          <p>Memories</p>
        </div>
        <div id="btn-1" className="sbi-item nes-btn is-primary ">
          <i class="nes-icon size-1x play"></i>
          <p>Watch</p>
        </div>
        <div id="btn-2" className="sbi-item nes-btn is-success ">
          <i class="nes-icon size-1x users"></i>
          <p>Group</p>
        </div>
        <div id="btn-3" className="sbi-item nes-btn is-warning  ">
          <i class="nes-icon size-1x github"></i>
          <p>Github</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
