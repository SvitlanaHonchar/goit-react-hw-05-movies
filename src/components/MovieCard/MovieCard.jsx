import React from 'react';
// import { requestMoviesGenres } from 'sevices.api/api';
// import { useState } from 'react';

const MovieCard = ({ movie }) => {
  const releaseYear = parseInt(movie.release_date);
  //   const [genres, setGenres] = useState({});

  //   useEffect(() => {
  //     const fetchMoviesGenres = async () => {
  //       try {
  //         const { genres } = await requestMoviesGenres();
  //         // console.log(genres);
  //         const updateGenres = genres.reduce((acc, item) => {
  //           return { ...acc, [item.id]: item.name };
  //         }, {});
  //         console.log('updateGenres: ', updateGenres);
  //         setGenres(updateGenres);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchMoviesGenres();
  //   }, []);
  //   console.log('movie: ', movie);
  return (
    <div>
      <h2>
        {movie.title} ({releaseYear})
      </h2>
      <p>User Score: {movie.vote_average}</p>
      <p>Overview: {movie.overview}</p>
      <p>Genres: {movie?.genres?.map(genre => genre.name).join(', ')}</p>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.overview}
        width="200"
      />
    </div>
  );
};

export default MovieCard;
