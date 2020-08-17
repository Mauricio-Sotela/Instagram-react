import React, { useState } from "react";
import Post__container from "./Post__container";
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
          border: `1px solid #6e6e6e`,
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
        <div className="col-sm-4 logo__container">
          <div>
            <img
              src={props.data.user.logo}
              alt="logo"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        {/* RIGHT-- INFO AND ICONS */}
        <div className="col-sm-8 d-flex flex-column">
          {/* CHANNEL_NAME... */}
          <div className="channel__div">
            <div className="chanel__container">
              <h1 className="chanel__name">{props.data.user.channel__name}</h1>
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
          <div className="user__info">
            <div className="pots">
              <strong>{props.data.user.posts}</strong>Posts
            </div>
            <div className="followers">
              <strong>{props.data.user.followers}</strong>Followers
            </div>
            <div className="following">
              <strong>{props.data.user.following}</strong>Following
            </div>
          </div>
          {/* CHANEL_INFO- */}
          <div className="channel__info">
            <h4>{props.data.user.info__title}</h4>
            <ul>
              {props.data.user.info__text.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
          {/* SIMILAR_PAGES */}
          <div></div>
        </div>
      </div>
      {/* POSTS- DIV */}
      <div className="container posts__div">
        
        <div className="card__container">
          <Post__container data={props.data} />
        </div>
      </div>
    </div>
  );
}
