import React, { useState } from "react";

export default function Posts__card(props) {
  const [hover, setHover] = useState({
    style: { opacity: 0, cursor: "initial" },
  });
  const hoverIn = (id) => {
   
    setHover({
      style: {
        opacity: 1,
        cursor: "pointer",
      },
    });
  };
  const hoverOut = (id) => {
    setHover({
      style: {
        opacity: 0,
        cursor: "initial",
      },
    });
  };
  const cards = props.cards.map((card) => {


    
    const { id, name, likes, comments, url } = card;
    return (
      <div className="card" key={id}>
        <img key={id} src={url} alt={name} />

        <div key={id}
          className="card__likes"
          style={hover.style}
          onMouseOver={({id}) => hoverIn(id)}
          onMouseLeave={({id}) => hoverOut(id)}
        >
          <span className="likes">
            <span class="material-icons">favorite</span>
            <span>{likes}</span>
          </span>
          <span className="comments">
            <span class="material-icons">comment</span>
            <span>{comments}</span>
          </span>
        </div>
      </div>
    );
  });

  return cards;
}
