// import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import axios from "axios"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import MoviesNowPlaying from "./Pages/MoviesNowPlaying"
import MovieDetail from "./Pages/MovieDetail"


const App = () => {

  axios.defaults.baseURL = "https://api.themoviedb.org/"
  axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWE0MGEzMDU0MTVlNTM1NDk0YTBkMzQ5YmQ1YTA3YiIsInN1YiI6IjY0ZTE4YjExNGE1MmY4MDBlNDM5NjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5W-LKRloCKqPHww0cQL3wl5cA5aPtQtgGocAN2Pjg9I'

  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<MoviesNowPlaying />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App