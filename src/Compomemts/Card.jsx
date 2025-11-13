import React from 'react';
import './Card.css';

function Card({ image, likes, views, tags }) {




  return (
    <div className="card">
        
      <img src={image} alt={likes} />
      <h3>{likes}❤️</h3>
      <p>{views} views</p>
     <div className="tags">#{tags}</div>
      <button>Download</button>
    </div>  
  );
}

export default Card;
