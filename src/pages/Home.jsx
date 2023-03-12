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
    <div>
      <h2>Trending today</h2>
      <ol>
        {trendingMovies.length > 0 ? (
          trendingMovies.map(trendingMovie => (
            <li key={trendingMovie.id}>{trendingMovie.title}</li>
          ))
        ) : (
          <p>Something went wrong... try to reload the page</p>
        )}
      </ol>
    </div>
  );
};

export default Home;
