import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
// import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import {
//   requestMoviesCredits,
//   requestMoviesReviews,
// } from 'sevices.api/api';

import { StyledNavLink } from './App.styled';

export const App = () => {
  // const [query, setQuery] = useState('popular');

  // useEffect(() => {

  //   const fetchMoviesCredits = async () => {
  //     try {
  //       const data = await requestMoviesCredits('722149');
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchMoviesCredits();

  //   const fetchMoviesReviews = async () => {
  //     try {
  //       const data = await requestMoviesReviews('722149');
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchMoviesReviews();
  // }, []);

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      {/* navigation */}
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </nav>

      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id/*" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
