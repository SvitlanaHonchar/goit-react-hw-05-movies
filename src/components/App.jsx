import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from 'pages/Home';
// import MovieDetails from 'pages/MovieDetails';
// import Movies from 'pages/Movies';
import Header from './Header/Header';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));
// const Header = lazy(() => import('./Header/Header'));

const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      {/* navigation */}
      {/* <Header /> */}

      {/* routes */}
      <Suspense>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id/*" element={<MovieDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
