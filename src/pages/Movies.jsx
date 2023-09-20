import { Link, useLocation, useSearchParams } from 'react-router-dom';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHttp } from 'hooks/useHttp';
import { getMoviesByName } from 'services/moviesAPI';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useForm();

  function submitForm(data) {
    console.log(data);
    setSearchParams(data.query && { query: data.query });
  }

  const query = searchParams.get('query') || '';
  const location = useLocation();
  const { data: search, loading, error } = useHttp(getMoviesByName, query);
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <input {...register('query')} type="text" />
        <button>Search</button>
      </form>
      {loading && <h3>Loading...</h3>}
      {error && <h3>Something went wrong!</h3>}
      <ul>
        {search?.map(({ id, title }) => (
          <li key={id}>
            <Link state={{ from: location }} to={id.toString()}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
