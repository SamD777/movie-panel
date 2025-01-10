import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const query = useQuery();
  const searchTerm = query.get('query');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchTerm}&page=${page}`
      );
      setMovies(response.data.results);
    };

    fetchSearchResults();
  }, [searchTerm, page]);

  return (
    <div>
      <h1>Search Results for "{searchTerm}"</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination currentPage={page} onPageChange={setPage} />
    </div>
  );
};

export default SearchPage;
