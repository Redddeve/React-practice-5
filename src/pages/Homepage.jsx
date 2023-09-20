import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'services/moviesAPI';

const Homepage = () => {
  const { data: trending, loading, error } = useHttp(getTrending);
  console.log(trending);
  return (
    <>
      <h2>Trending today</h2>
      {loading && <h2>Loading...</h2>}
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
