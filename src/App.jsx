import { Navigate, Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import Layout from 'components/Layout';
import Homepage from 'pages/Homepage';
import Movies from 'pages/Movies';
import Credits from 'components/Credits';
import Reviews from 'components/Reviews';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="credits" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
