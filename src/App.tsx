import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import MoviesNowPlaying from "./Pages/MoviesNowPlaying"
import MovieDetail from "./Pages/MovieDetail"


const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movie" element={<MoviesNowPlaying />} />
          <Route path="/Movie/:MovieId" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App