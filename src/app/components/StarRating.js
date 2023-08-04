// StarRating.js

import React from 'react';

const StarRating = ({ rating, onRatingChange }) => {
  const MAX_RATING = 5;
  const stars = Array.from({ length: MAX_RATING }, (_, index) => index + 1);

  return (
    <div>
      {stars.map((star) => (
        <span
          key={star}
          className={`cursor-pointer ${
            star <= rating ? 'text-yellow-500' : 'text-gray-400'
          }`}
          onClick={() => onRatingChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
