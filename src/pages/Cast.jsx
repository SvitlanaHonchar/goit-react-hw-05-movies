import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMoviesCredits } from 'sevices.api/api';
import emptypicture from '../images/emptypicture.png';

const Cast = () => {
  const { id: movieId } = useParams();

  const [castMembers, setCastMembers] = useState([]);

  useEffect(() => {
    fetchMoviesCredits(movieId);
  }, [movieId]);

  const fetchMoviesCredits = async movieId => {
    try {
      const { cast } = await requestMoviesCredits(movieId);
      console.log(cast);
      setCastMembers(cast);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {castMembers.length > 0 ? (
        castMembers.map(castMember => {
          return (
            <div>
              <h3>{castMember.name}</h3>
              <p>{castMember.character}</p>
              {castMember.profile_path === null ? (
                <img src={emptypicture} alt="empty" width="150" />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/original/${castMember.profile_path}`}
                  alt={castMember.character}
                  width="150"
                />
              )}
            </div>
          );
        })
      ) : (
        <p>no cast for the movie</p>
      )}
    </div>
  );
};

export default Cast;
