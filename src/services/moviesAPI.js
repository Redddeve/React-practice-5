import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a3588ab6a2878d261cb41e898dd8737b';
const options = {
  params: {
    api_key: API_KEY,
  },
};

export const getTrending = async () => {
  const { data } = await axios.get('/trending/movie/day', options);
  return data.results;
};

export const getMoviesByName = async query => {
  const { data } = await axios.get(`/search/movie?query=${query}`, options);
  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`, options);
  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, options);
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`, options);
  return data.results;
};
