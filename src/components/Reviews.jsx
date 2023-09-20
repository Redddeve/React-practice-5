import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const { data: reviews, error } = useHttp(getMovieReviews, movieId);
  console.log(reviews);
  return (
    <div>
      <h2>Movie Reviews</h2>
      {error && <p>There is no info on cast for this movie</p>}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
