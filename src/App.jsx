import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout';

export const App = () => {
  const Homepage = lazy(() => import('pages/Homepage'));
  const Movies = lazy(() => import('pages/Movies'));
  const MovieDetails = lazy(() => import('pages/MovieDetails'));
  const Credits = lazy(() => import('components/Credits'));
  const Reviews = lazy(() => import('components/Reviews'));
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
