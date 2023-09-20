import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesAPI';

const Credits = () => {
  const { movieId } = useParams();
  const { data, error } = useHttp(getMovieCredits, movieId);
  const [firstIndex, setFirstIndex] = useState(0);
  console.log(data);
  const per_page = 5;

  const pages = Math.ceil(data.length / per_page);
  const pagesData = Array(pages)
    .fill('-')
    .map((_, i) => i + 1);
  const getData = data => {
    return [...data].slice(firstIndex, per_page + firstIndex);
  };
  const imgNotFound = 'https://demofree.sirv.com/nope-not-here.jpg';
  return (
    <div>
      {error && <p>There is no info on cast for this movie</p>}
      <ul>
        {getData(data)?.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
              onError={e => {
                e.currentTarget.src = imgNotFound;
              }}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
      <ul>
        {pagesData.map(page => (
          <li>
            {' '}
            <button
              onClick={() => {
                setFirstIndex(prev => prev + per_page);
              }}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Credits;
