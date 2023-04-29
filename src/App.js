import Navbar from './components/navbar/Navbar'
import MovieCard from './components/Cards/MovieCard'
import SeriesCard from './components/Cards/SeriesCard'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchCard from './components/Cards/SearchCard';

function App() {
  const searchParams = new URLSearchParams(document.location.search)
  let param = searchParams.get('search');
  if (typeof param != "string") {
    param = '/'
  }

  return (
    <div className="max-h-screen">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="series" element={<SeriesCard />} />
          <Route path="movies" element={<MovieCard />} />
          <Route path={"/" + param} element={<SearchCard searchKey={param} />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App;
