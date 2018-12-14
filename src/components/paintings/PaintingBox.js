import React from 'react';
import { Link } from 'react-router-dom';

function PaintingBox({ painting }) {
  return (
    <Link className="index-painting-container" to={`/paintings/${painting._id}`}>
      <div className="index-painting">
        <p className="index-painting-details">{painting.artist}</p>
        <p className="index-painting-details">{painting.name}</p>
        <img className="index-painting-image" src={painting.image} />
      </div>
      <div className="index-user-details-container">
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
        <h1>Hey</h1>
      </div>
    </Link>
  );
}

export default PaintingBox;
