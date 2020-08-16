import React, { useState } from "react";
import { user } from "../components/userData.json";
import logo from "../images/mainLogo.jpg";
import icons from "../components/Icons";

export default function Header(props) {
  const [follow, setFollow] = useState({
    follow: "Follow",
    style: { backgroundColor: "#0095f6", color: "white" },
  });
  // FUNCTION TO CHANGE BG COLOR AND FOLLOWING STATUS
  const followFunction = () => {
    if (follow.follow === "Follow") {
      setFollow({
        ...follow,
        follow: "Unfollow",
        style: {
          backgroundColor: "transparent",
          color: "black",
          border: `1px solid black`,
        },
      });
    } else {
      setFollow({
        ...follow,
        follow: "Follow",
        style: { backgroundColor: "#0095f6", color: "white" },
      });
    }
  };

  return (
    <div className="container mt-3">
      {/* TOP DIV */}
      <div className="row">
        {/* LEFT---LOGO */}
        <div className="col-sm-4">
          <div>
            <img src={logo} alt="logo" style={{ borderRadius: "50%" }} />
          </div>
        </div>
        {/* RIGHT-- INFO AND ICONS */}
        <div className="col-sm-8 d-flex flex-column">
          {/* CHANNEL_NAME... */}
          <div className="channel__div">
            <div className='chanel__container'>
              <h1 className="chanel__name">{props.chanel__name}</h1>
              <span
                className="follow"
                style={follow.style}
                onClick={() => {
                  followFunction();
                }}
              >
                {follow.follow}
              </span>
              <span className="similar__pages">
                <span class="material-icons">expand_more</span>
              </span>
              <span className="dots">
                <span class="material-icons">more_horiz</span>
              </span>
            </div>
          </div>
          {/* POSTS-FOLLOWERS-FOLLOWING */}
          <div></div>
          {/* CHANEL_INFO- */}
          <div></div>
          {/* SIMILAR_PAGES */}
          <div></div>
        </div>
      </div>
      {/* BOTTOM DIV */}
      <div></div>
    </div>
  );
}
