import React from 'react';
import { Link } from 'react-router-dom';

function PaintingBox({ painting }) {
  return (
    <Link to={`/paintings/${painting._id}`}>
      <article className="painting-box">
        <img src={painting.image} />
        <hr />
        <h3>{painting.name}</h3>
      </article>
    </Link>
  );
}

export default PaintingBox;
