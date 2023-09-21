import React, { Suspense, useRef } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useHttp } from 'hooks/useHttp';
import { getMovieDetails } from 'services/moviesAPI';
import Loader from 'components/Loader';
import {
  AddLink,
  DescriptionBox,
  DescriptionList,
  // DetailsWrapper,
  GoBackButton,
  StyledBox,
  StyledItem,
  StyledText,
} from 'styledComponents/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const backRef = useRef(location.state?.from || '/');
  const { data, loading, error } = useHttp(getMovieDetails, movieId);
  const {
    title,
    overview,
    vote_average,
    poster_path,
    genres,
    tagline,
    production_companies,
  } = data;
  const roundedScore = Math.round(vote_average * 10);
  return (
    <>
      <GoBackButton onClick={() => navigate(backRef.current)}>
        &#8592; Go back
      </GoBackButton>
      {loading && <Loader />}
      {error && <h3>Something went wrong!</h3>}
      <DescriptionBox>
        <img
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <DescriptionList>
          <StyledItem>
            <h1>{title}</h1>
            {tagline && <StyledText>{tagline}</StyledText>}
            <p>User score: {roundedScore}%</p>
          </StyledItem>
          <StyledItem>
            <h2>Overview</h2>
            <p>{overview}</p>
          </StyledItem>
          <StyledItem>
            <h3>Genres</h3>
            <p>
              {genres?.map(({ id, name }) => (
                <span key={id}>{name}</span>
              ))}
              .
            </p>
          </StyledItem>
          {production_companies?.length > 0 && (
            <StyledItem>
              <h3>Production companies</h3>
              <p>
                {production_companies?.map(({ id, name }) => (
                  <span key={id}>{name}</span>
                ))}
                .
              </p>
            </StyledItem>
          )}
        </DescriptionList>
      </DescriptionBox>
      <hr />
      <StyledBox>
        <h3>Additional information</h3>
        <ul>
          <li>
            <AddLink to={'credits'}>Cast</AddLink>
          </li>
          <li>
            <AddLink to={'reviews'}>Reviews</AddLink>
          </li>
        </ul>
      </StyledBox>
      <hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
