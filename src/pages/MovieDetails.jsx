import React, { Suspense, useRef } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useHttp } from 'hooks/useHttp';
import { getMovieDetails } from 'services/moviesAPI';
import { styled } from 'styled-components';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const backRef = useRef(location.state?.from || '/');
  const { data } = useHttp(getMovieDetails, movieId);
  console.log(data);
  const { title, overview, vote_average, poster_path, genres } = data;
  const roundedScore = Math.round(vote_average * 10);
  return (
    <DetailsWrapper>
      <button onClick={() => navigate(backRef.current)}>&#8592; Go back</button>
      <div>
        <img
          src={poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
        <ul>
          <li>
            <h2>{title}</h2>
            <p>User score: {roundedScore}%</p>
          </li>
          <li>
            <h3>Overview</h3>
            <p>{overview}</p>
          </li>
          <li>
            <h4>Genres</h4>
            {genres?.map(({ id, name }) => (
              <p key={id}>{name}</p>
            ))}
          </li>
        </ul>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={'credits'}>Cast</Link>
          </li>
          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </div>
    </DetailsWrapper>
  );
};

export default MovieDetails;

export const DetailsWrapper = styled.div`
  display: grid;
`;
