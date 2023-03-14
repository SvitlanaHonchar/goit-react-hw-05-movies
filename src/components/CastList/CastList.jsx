import React from 'react';
import emptypicture from '../../images/emptypicture.png';

const CastList = ({ castMembers }) => {
  return (
    <>
      <ul>
        {castMembers.map(castMember => {
          return (
            <li key={castMember.id}>
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
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CastList;
