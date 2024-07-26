import React, { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`movie-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.image} alt={movie.title} className="movie-card__image" />
      {isHovered && (
        <div class="card-extra">
        <p>This is the additional content that is revealed when you hover over the card.</p>
    </div>
      )}
    </div>
  );
};

export default MovieCard;
