import React from 'react';
import { Link } from 'react-router-dom';

function PaintingBox({ painting }) {
  return (
    <Link to={`/paintings/${painting._id}`}>
      <div>
        <p>{painting.name}</p>
        <img src={painting.image} />
      </div>
    </Link>
  );
}

export default PaintingBox;
