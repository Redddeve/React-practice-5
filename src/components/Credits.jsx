import { useHttp } from 'hooks/useHttp';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/moviesAPI';
import {
  LoadMoreButton,
  StyledBox,
  StyledItem,
  StyledList,
} from 'styledComponents/Credits.styled';

const Credits = () => {
  const { movieId } = useParams();
  const { data, error } = useHttp(getMovieCredits, movieId);
  const [ItemNum, setItemNum] = useState(0);
  const [page, setPage] = useState(1);
  const per_page = 10;

  const pages = Math.ceil(data.length / per_page);
  /* const pagesData = Array(pages)
    .fill('-')
    .map((_, i) => i + 1); */
  const getData = data => {
    return [...data].slice(0, per_page + ItemNum);
  };
  function onLoadMore() {
    setItemNum(prev => prev + per_page);
    setPage(prev => prev + 1);
  }
  const imgNotFound = 'https://demofree.sirv.com/nope-not-here.jpg';
  return (
    <StyledBox>
      <h2>Movie Cast</h2>
      {error && <p>There is no info on cast for this movie</p>}
      <StyledList>
        {getData(data)?.map(({ id, name, character, profile_path }) => (
          <StyledItem key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : ''
              }
              alt={name}
              onError={e => {
                //*  Not to forget
                e.currentTarget.src = imgNotFound;
              }}
            />
            <p>
              <b>Actor:</b> {name}
            </p>
            <p>
              <b>Character:</b> {character}
            </p>
          </StyledItem>
        ))}
      </StyledList>
      {page !== pages && (
        <LoadMoreButton onClick={onLoadMore}>Load More</LoadMoreButton>
      )}
      {/* <ul>
        {pagesData.map(page => (
          <li>
            {' '}
            <button
              onClick={() => {
                setItemNum(prev => prev + per_page);
              }}
            >
              {page}
            </button>
          </li>
        ))}
      </ul> */}
    </StyledBox>
  );
};

export default Credits;
