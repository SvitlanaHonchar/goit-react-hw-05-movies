import HomeComp from 'components/Home/HomeComp';
import React from 'react';
import { useEffect, useState } from 'react';
import { requestTrendingMovies } from 'sevices.api/api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  // fetching movies from database when page is loaded
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await requestTrendingMovies();
        console.log(results);
        setTrendingMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {trendingMovies.length > 0 ? (
        <HomeComp trendingMovies={trendingMovies} />
      ) : (
        <p>Something went wrong... try to reload the page</p>
      )}
    </>
  );
};

export default Home;
