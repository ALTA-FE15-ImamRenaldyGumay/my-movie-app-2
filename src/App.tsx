// import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { toggleMode } from "./features/ModeSlice"

import axios from "axios"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import MovieDetail from "./Pages/MovieDetail"
import NowPlaying from "./Pages/nowPlaying"
// import Setting from "./Pages/setting"


const App = () => {

  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.theme.mode);



  axios.defaults.baseURL = "https://api.themoviedb.org/"
  axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWE0MGEzMDU0MTVlNTM1NDk0YTBkMzQ5YmQ1YTA3YiIsInN1YiI6IjY0ZTE4YjExNGE1MmY4MDBlNDM5NjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5W-LKRloCKqPHww0cQL3wl5cA5aPtQtgGocAN2Pjg9I'

  return (
    <div className={`w-screen h-screen ${mode ? 'bg-black' : 'bg-white'}`}>

      <BrowserRouter>
        <Navbar onClick={() => dispatch(toggleMode())} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<NowPlaying />} />
          {/* <Route path="/setting" element={ <Setting />} /> */}
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App