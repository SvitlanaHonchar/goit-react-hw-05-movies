import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ searchedMovies }) => {
  const location = useLocation();

  return (
    <>
      <ul>
        {searchedMovies.map(searchedMovie => (
          <li key={searchedMovie.id}>
            <Link to={`/movies/${searchedMovie.id}`} state={{ from: location }}>
              {searchedMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
