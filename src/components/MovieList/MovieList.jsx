import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledSection } from './MovieList.styled';

const MovieList = ({ searchedMovies }) => {
  const location = useLocation();

  return (
    <StyledSection>
      <ul>
        {searchedMovies.map(searchedMovie => (
          <li key={searchedMovie.id}>
            <Link to={`/movies/${searchedMovie.id}`} state={{ from: location }}>
              {searchedMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </StyledSection>
  );
};

export default MovieList;
