import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import MovieCard from './components/Cards/MovieCard'
import SeriesCard from './components/Cards/SeriesCard'
import SearchCard from './components/Cards/SearchCard';
import DetailsPage from './components/Details/DetailsPage';
import Favorites from './components/Cards/Favorites';
import Loading from './components/Loading/Loading';


const LazyMovieCard = lazy(() => import('./components/Cards/MovieCard'));

function App() {

  return (
    <div className="max-h-screen">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="series" element={<SeriesCard />} />
          <Route path="movies" element={<Suspense fallback={<Loading />}><LazyMovieCard /></Suspense>} />
          <Route path={"/search"} element={<SearchCard />} />
          <Route path={"/details/:id"} element={<DetailsPage />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App;
