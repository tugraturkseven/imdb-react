import Navbar from './components/navbar/Navbar'
import Card from './components/Cards/Card'
import React, { useState } from 'react'

function App() {

  return (
    <div className="overflow-hidden bg-slate-900 h-screen">
      <Navbar />
      <Card />
    </div >
  )
}

export default App;
