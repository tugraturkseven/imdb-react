import Navbar from './components/navbar/Navbar'
import MovieCard from './components/Cards/MovieCard'
import SeriesCard from './components/Cards/SeriesCard'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="max-h-screen">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieCard />} />
          <Route path="series" element={<SeriesCard />} />
          <Route path="movies" element={<MovieCard />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App;
