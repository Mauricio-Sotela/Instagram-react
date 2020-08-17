import React from "react";

export default function Posts__card(props) {
  const cards = props.cards.map((card) => {
    const { id, name, likes, comments, url } = card;
    return (
      <div className="card">
        <img key={id} src={url} alt={name} />

        <div className='card__likes'>
          <span className='likes'>
            <span class="material-icons">expand_more</span>
            <span>{likes}</span>
          </span>
          <span className='comments'>
            <span class="material-icons">expand_more</span>
            <span>{comments}</span>
          </span>
        </div>
      </div>
    );
  });

  return cards;
}
