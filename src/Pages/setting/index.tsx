// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import { addFavorites } from "../../features/AddFavorites";

// const MovieList = () => {
//   const dispatch = useDispatch();
//   const favorites = useSelector((state) => state.addFavorites);
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     // Ganti 'YOUR_API_KEY' dengan kunci API TMDB Anda
//     const apiKey = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWE0MGEzMDU0MTVlNTM1NDk0YTBkMzQ5YmQ1YTA3YiIsInN1YiI6IjY0ZTE4YjExNGE1MmY4MDBlNDM5NjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5W-LKRloCKqPHww0cQL3wl5cA5aPtQtgGocAN2Pjg9I";
//     axios
//       .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
//       .then((response) => {
//         setMovies(response.data.results);
//       })
//       .catch((error) => {
//         console.error("Error fetching movies:", error);
//       });
//   }, []);

//   const handleAddFavorite = (movie: any) => {
//     dispatch(addFavorites(movie));
//   };

//   return (
//     <div>
//       <h1>Movie List</h1>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>
//             {movie.title}
//             <button onClick={() => handleAddFavorite(movie)}>Add to Favorites</button>
//           </li>
//         ))}
//       </ul>
//       <h2>Favorites</h2>
//       <ul>
//         {favorites.map((favorite) => (
//           <li key={favorite.id}>{favorite.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieList;
