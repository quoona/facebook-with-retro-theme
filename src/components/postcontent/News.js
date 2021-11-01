import React from "react";
import "./news.css";
import night from "../../images/night.png";
import cat from "../../images/cat.jpg";
import girl from "../../images/girl.png";
import mountain from "../../images/mountain.png";
import cat2 from "../../images/cat2.jpg";
import "nes.css/css/nes.min.css";
function News() {
  return (
    <div className="n">
      <div id="nes-container" className="nes-container is-rounded with-title">
        <h3 className="title">News</h3>
        <div className="n-top">
          <div className="n-top-avatar">
            <img
              src={cat}
              alt=""
              className="n-avatar nes-avatar is-rounded  is-medium"
            />
          </div>
          <div className="n-top-info">
            <p>Nom Nom</p>
            <p>11/1/2021</p>
          </div>
        </div>
        <div className="n-caption">Heyyy this is caption :) </div>
        <div className="n-img-news">
          <img src={girl} alt="" style={{ imageRendering: "pixelated" }} />
        </div>
        <div className="n-optional-wrapper">
          <div className="n-optional   ">
            <i className="nes-icon size-1x heart"></i>
            <p>Love</p>
          </div>
          <div className="n-optional">
            <i className="nes-icon size-1x comment"></i>
            <p>Comment</p>
          </div>
          <div className="n-optional ">
            <i className="nes-icon size-1x caret-right"></i>
            <p>Share</p>
          </div>
        </div>
      </div>

      <div id="nes-container" className="nes-container is-rounded with-title">
        <h3 className="title">News</h3>
        <div className="n-top">
          <div className="n-top-avatar">
            <img
              src={cat}
              alt=""
              className="n-avatar nes-avatar is-rounded  is-medium"
            />
          </div>
          <div className="n-top-info">
            <p>Nom Nom</p>
            <p>11/1/2021</p>
          </div>
        </div>
        <div className="n-caption">Heyyy this is caption :) </div>
        <div className="n-img-news">
          <img src={night} alt="" style={{ imageRendering: "pixelated" }} />
        </div>
        <div className="n-optional-wrapper">
          <div className="n-optional">
            <i className="nes-icon size-1x heart"></i>
            <p>Love</p>
          </div>
          <div className="n-optional">
            <i className="nes-icon size-1x comment"></i>
            <p>Comment</p>
          </div>
          <div className="n-optional">
            <i className="nes-icon size-1x caret-right"></i>
            <p>Share</p>
          </div>
        </div>
      </div>

      <div id="nes-container" className="nes-container is-rounded with-title">
        <h3 className="title">News</h3>
        <div className="n-top">
          <div className="n-top-avatar">
            <img
              src={cat2}
              alt=""
              className="n-avatar nes-avatar is-rounded  is-medium"
            />
          </div>
          <div className="n-top-info">
            <p>Nom Nom</p>
            <p>11/1/2021</p>
          </div>
        </div>
        <div className="n-caption">Heyyy this is caption :) </div>
        <div className="n-img-news">
          <img src={cat} alt="" style={{ imageRendering: "pixelated" }} />
        </div>
        <div className="n-optional-wrapper">
          <div className="n-optional">
            <i className="nes-icon size-1x heart"></i>
            <p>Love</p>
          </div>
          <div className="n-optional">
            <i className="nes-icon size-1x comment"></i>
            <p>Comment</p>
          </div>
          <div className="n-optional">
            <i className="nes-icon size-1x caret-right"></i>
            <p>Share</p>
          </div>
        </div>
      </div>

      <div id="nes-container" className="nes-container is-rounded with-title">
        <h3 className="title">News</h3>
        <div className="n-top">
          <div className="n-top-avatar">
            <img
              src={cat}
              alt=""
              className="n-avatar nes-avatar is-rounded  is-medium"
            />
          </div>
          <div className="n-top-info">
            <p>Nom Nom</p>
            <p>11/1/2021</p>
          </div>
        </div>
        <div className="n-caption">Heyyy this is caption :) </div>
        <div className="n-img-news">
          <img src={cat} alt="" style={{ imageRendering: "pixelated" }} />
        </div>
        <div className="n-optional-wrapper">
          <div className="n-optional">
            <i className="nes-icon size-1x heart"></i>
            <p>Love</p>
          </div>
          <div className="n-optional">
            <i className="nes-icon size-1x comment"></i>
            <p>Comment</p>
          </div>
          <div className="n-optional">
            <i className="nes-icon size-1x caret-right"></i>
            <p>Share</p>
          </div>
        </div>
      </div>

      <div id="nes-container" className="nes-container is-rounded with-title">
        <h3 className="title">News</h3>
        <div className="n-top">
          <div className="n-top-avatar">
            <img
              src={cat}
              alt=""
              className="n-avatar nes-avatar is-rounded  is-medium"
            />
          </div>
          <div className="n-top-info">
            <p>Nom Nom</p>
            <p>11/1/2021</p>
          </div>
        </div>
        <div className="n-caption">Heyyy this is caption :) </div>
        <div className="n-img-news">
          <img src={mountain} alt="" style={{ imageRendering: "pixelated" }} />
        </div>
        <div className="n-optional-wrapper">
          <div className="n-optional">
            <i className="nes-icon size-1x heart"></i>
            <p>Love</p>
          </div>
          <div className="n-optional">
            <i className="nes-icon size-1x comment"></i>
            <p>Comment</p>
          </div>
          <div className="n-optional">
            <i className="nes-icon size-1x caret-right"></i>
            <p>Share</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
