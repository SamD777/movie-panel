import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3 className="movie-title">{movie.title}</h3>
      <Link to={`/movie/${movie.id}`} className="details-link">View Details</Link>
    </div>
  );
};

export default MovieCard;