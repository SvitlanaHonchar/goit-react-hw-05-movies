import React from 'react';

const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => {
          return (
            <li key={review.id}>
              {review.author}
              <p>{review.content}</p>
            </li>
          );
        })
      ) : (
        <p>no reviews for the movie</p>
      )}
    </ul>
  );
};

export default ReviewsList;
