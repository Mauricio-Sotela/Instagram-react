import React, { useState } from "react";


export default function Posts__card(props) {
  const [hover, setHover] = useState({
    style: {
      display: "none",
      cursor: "none",
    },
  });
  const hoverIn = () => {
    alert('HoverIn')
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
 console.log(card);
    
    const { id, name, likes, comments, url } = card;
    return (
      <div className="card">
        <video key={id} src={url} type="video/mp4" controls/>

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
