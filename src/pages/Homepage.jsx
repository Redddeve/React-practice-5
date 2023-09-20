import Loader from 'components/Loader';
import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'services/moviesAPI';

const Homepage = () => {
  const { data: trending, loading, error } = useHttp(getTrending);
  return (
    <>
      <h1>Trending today</h1>
      {loading && <Loader />}
      {error && <h2>Something went wrong!</h2>}
      <ul>
        {trending?.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id.toString()}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Homepage;
