import React, { useState } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

export default function Video_card(props) {
  const video__cards = props.cards.map((card) => {
    const { id, name, likes, comments, url } = card;
    return (
      <div className="video__card">
        <Player autoplay key={id} src={url} />

        <div className="video__card__likes">
          <span className="video__likes">
            <span class="material-icons">favorite</span>
            <span>{likes}</span>
          </span>
          <span className="video__comments">
            <span class="material-icons">comment</span>
            <span>{comments}</span>
          </span>
        </div>
      </div>
    );
  });

  return video__cards;
}
