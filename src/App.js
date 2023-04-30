import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import MovieCard from './components/Cards/MovieCard'
import SeriesCard from './components/Cards/SeriesCard'
import SearchCard from './components/Cards/SearchCard';
import DetailsPage from './components/Details/DetailsPage';

function App() {
  const getParams = new URLSearchParams(document.location.search)
  let searchParam = getParams.get('search');
  let detailsParam = getParams.get('details');

  if (typeof searchParam != "string") {
    searchParam = '';
  }

  if (typeof detailsParam != "string") {
    detailsParam = '';
  }

  return (
    <div className="max-h-screen">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="series" element={<SeriesCard />} />
          <Route path="movies" element={<MovieCard />} />
          <Route path={"/" + searchParam} element={<SearchCard searchKey={searchParam} />} />
          <Route path={"/" + detailsParam} element={<DetailsPage detailsKey={detailsParam} />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App;
