import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMoviesReviews } from 'sevices.api/api';

const Reviews = () => {
  const { id: movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMoviesReviews(movieId);
  }, [movieId]);

  const fetchMoviesReviews = async movieId => {
    try {
      const { results } = await requestMoviesReviews(movieId);
      console.log(results);
      setReviews(results);
    } catch (error) {
      console.log(error);
    }
  };

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

export default Reviews;
