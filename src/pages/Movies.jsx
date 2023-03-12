import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { requestSearchedMovies } from 'sevices.api/api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchedMovies, setsearchedMovies] = useState([]);

  // fetching movies by query
  const fetchSearchedMovies = async () => {
    try {
      const { results } = await requestSearchedMovies(query);
      console.log(results);
      setsearchedMovies(results);
    } catch (error) {
      console.log(error);
    }
  };

  // adding input value to query in state
  const handleInput = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  // on form submitting
  const handleSubmit = e => {
    e.preventDefault();

    //   if query is empty or consists of spaces
    if (query.trim() === '') {
      alert('Enter your query');
      return;
    }

    //   fetching movies
    fetchSearchedMovies(query);
    setQuery('');
    setsearchedMovies([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleInput}
          autoComplete="off"
          autoFocus
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {searchedMovies.length > 0 ? (
          searchedMovies.map(searchedMovie => (
            <li key={searchedMovie.id}>
              <Link to={`/movies/${searchedMovie.id}`}>
                {searchedMovie.title}
              </Link>
            </li>
          ))
        ) : (
          <p>Nothing found... try different query</p>
        )}
      </ul>
    </div>
  );
};

export default Movies;
