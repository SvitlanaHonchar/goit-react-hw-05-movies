import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { requestMoviesById } from 'sevices.api/api';
import { BackLink } from 'components/BackLink/BackLink';
import MovieCard from 'components/MovieCard/MovieCard';

const MovieDetails = () => {
  const { id: movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetchMoviesById(movieId);
  }, [movieId]);

  const fetchMoviesById = async movieId => {
    try {
      const data = await requestMoviesById(movieId);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BackLink to={location?.state?.from ?? '/'}>⬅ Go back</BackLink>

      <MovieCard movie={movie} />

      <Outlet />
    </>
  );
};

export default MovieDetails;
