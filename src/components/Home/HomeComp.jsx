import React from 'react';
import { Link } from 'react-router-dom';

const HomeComp = ({ trendingMovies }) => {
  return (
    <section>
      <ol>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <Link to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HomeComp;
