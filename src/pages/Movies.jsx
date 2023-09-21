import { useLocation, useSearchParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHttp } from 'hooks/useHttp';
import { getMoviesByName } from 'services/moviesAPI';
import {
  StyledButton,
  StyledForm,
  StyledInput,
} from 'styledComponents/Movies.styled';
import {
  StyledItem,
  StyledLink,
  StyledList,
} from 'styledComponents/Homepage.styled';
import Loader from 'components/Loader';
import { toast } from 'react-toastify';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useForm();

  function submitForm(data) {
    setSearchParams(data.query && { query: data.query.trim() });
  }

  const query = searchParams.get('query') || '';
  useEffect(() => {
    if (query === '') {
      toast.info('Type something in the search input.');
    }
  }, [query]);
  const location = useLocation();
  const { data: search, loading, error } = useHttp(getMoviesByName, query);
  return (
    <>
      <StyledForm onSubmit={handleSubmit(submitForm)}>
        <StyledInput
          {...register('query')}
          type="text"
          placeholder="Search by name"
        />
        <StyledButton>Search</StyledButton>
      </StyledForm>
      {loading && <Loader />}
      {error && <h3>Something went wrong!</h3>}
      {search?.length > 0 ? (
        <StyledList>
          {search?.map(({ id, title }) => (
            <StyledItem key={id}>
              <StyledLink state={{ from: location }} to={id.toString()}>
                {title}
              </StyledLink>
            </StyledItem>
          ))}
        </StyledList>
      ) : (
        query !== '' && <h3>Nothing was found</h3>
      )}
    </>
  );
};

export default Movies;
