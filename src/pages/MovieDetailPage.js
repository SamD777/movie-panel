// src/pages/MovieDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetailPage.css';

const MovieDetailPage = () => {
  const { id } = useParams(); // Get movie_id from URL
  const [movie, setMovie] = useState(null); // Movie details
  const [cast, setCast] = useState([]); // Movie cast

  useEffect(() => {
    // Fetch movie details
    const fetchMovieDetails = async () => {
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setMovie(movieResponse.data);

      // Fetch movie cast details
      const castResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setCast(castResponse.data.cast); // Set cast details
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail-container">
      <h1 className="movie-title">{movie.title}</h1>
      <p className="movie-overview">{movie.overview}</p>
      <h2 className="cast-title">Cast</h2>
      <div className="cast-list">
        {cast.slice(0, 10).map((actor) => (
          <div key={actor.id} className="cast-item">
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              className="cast-image"
            />
            <p className="cast-name">{actor.name}</p>
            <p className="cast-role">as {actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;
