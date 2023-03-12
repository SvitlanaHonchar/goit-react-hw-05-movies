import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMoviesCredits } from 'sevices.api/api';

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
          return <h3>{castMember.name}</h3>;
        })
      ) : (
        <p>no cast for the movie</p>
      )}
    </div>
  );
};

export default Cast;
