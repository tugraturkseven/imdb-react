import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import MovieCard from './components/Cards/MovieCard'
import SeriesCard from './components/Cards/SeriesCard'
import SearchCard from './components/Cards/SearchCard';
import DetailsPage from './components/Details/DetailsPage';
import Favorites from './components/Cards/Favorites';

function App() {

  return (
    <div className="max-h-screen">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="series" element={<SeriesCard />} />
          <Route path="movies" element={<MovieCard />} />
          <Route path={"/search"} element={<SearchCard />} />
          <Route path={"/details/:id"} element={<DetailsPage />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App;
