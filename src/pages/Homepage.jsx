import Loader from 'components/Loader';
import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { getTrending } from 'services/moviesAPI';
import {
  StyledItem,
  StyledLink,
  StyledList,
} from 'styledComponents/Homepage.styled';

const Homepage = () => {
  const { data: trending, loading, error } = useHttp(getTrending);
  return (
    <>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {error && <h2>Something went wrong!</h2>}
      <StyledList>
        {trending?.map(({ id, title }) => (
          <StyledItem key={id}>
            <StyledLink to={`/movies/${id.toString()}`}>{title}</StyledLink>
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
};

export default Homepage;
