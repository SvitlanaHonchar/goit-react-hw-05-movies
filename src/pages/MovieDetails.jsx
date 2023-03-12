import React, { useState, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { requestMoviesById } from 'sevices.api/api';
import { NavLink } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetails = () => {
  const { id: movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMoviesById(movieId);
  }, [movieId]);

  const fetchMoviesById = async movieId => {
    try {
      const data = await requestMoviesById(movieId);
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.overview}
        width="200"
      />
      {/* images?api_key=<<api_key>>&language=en-US */}
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Reviews</NavLink>

      <Routes>
        <Route path="cast" element={<Cast />}></Route>
        <Route path="reviews" element={<Reviews />}></Route>
      </Routes>
    </div>
  );
};

export default MovieDetails;
