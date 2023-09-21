import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesAPI';
import { StyledBox, StyledItem } from 'styledComponents/Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const { data: reviews, error } = useHttp(getMovieReviews, movieId);
  return (
    <StyledBox>
      <h2>Movie Reviews</h2>
      {error && <p>There is no info on cast for this movie</p>}
      {reviews.length ? (
        <ul>
          {reviews?.map(({ id, author, content }) => (
            <StyledItem key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </StyledItem>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </StyledBox>
  );
};

export default Reviews;
