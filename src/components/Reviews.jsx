import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesAPI';

const Reviews = () => {
  const { movieId } = useParams();
  const { data, error } = useHttp(getMovieReviews, movieId);
  console.log(data);
  return <div>Reviews</div>;
};

export default Reviews;
