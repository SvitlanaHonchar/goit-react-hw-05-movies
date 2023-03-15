import React from 'react';
import emptypicture from '../../images/emptypicture.png';
import { StyledUl } from './CastList.styled';

const CastList = ({ castMembers }) => {
  return (
    <>
      <StyledUl>
        {castMembers.map(castMember => {
          return (
            <li key={castMember.id}>
              <h3>{castMember.name}</h3>
              <p>
                <i>{castMember.character}</i>
              </p>
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
      </StyledUl>
    </>
  );
};

export default CastList;
