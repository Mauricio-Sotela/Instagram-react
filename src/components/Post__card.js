import React, { useState } from "react";


export default function Posts__card(props) {
  const [hover, setHover] = useState({
    style: {
      display: "none",
      cursor: "none",
    },
  });
  const hoverIn = () => {
    alert('mouseOver')
    setHover({
      style: {
        display: "flex",
        cursor: "pointer",
      },
    });
  };
  const hoverOut = () => {
    setHover({
      style: {
        display: "none",
        cursor: "none",
      },
    });
  };
  const cards = props.cards.map((card) => {

    
    const { id, name, likes, comments, url } = card;
    return (
      <div className="card">
        <img key={id} src={url} alt={name} />

        <div
          className="card__likes"
          style={{ hover }}
          onMouseOver={()=>hoverIn()}
          onMouseLeave={()=>hoverOut()}
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
