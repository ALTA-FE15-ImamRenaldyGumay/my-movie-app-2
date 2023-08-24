import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {

    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);

    const API_TOKKENS = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWE0MGEzMDU0MTVlNTM1NDk0YTBkMzQ5YmQ1YTA3YiIsInN1YiI6IjY0ZTE4YjExNGE1MmY4MDBlNDM5NjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5W-LKRloCKqPHww0cQL3wl5cA5aPtQtgGocAN2Pjg9I'
    useEffect(() => {
        // Lakukan permintaan GET ke API untuk mendapatkan detail produk berdasarkan productId
        axios.get(`https://api.themoviedb.org/3/movie/${id}`)
            .then(response => {
                setMovieDetail(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    if (!movieDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movie-detail">
            <h1>{movieDetail.original_title}</h1>
            <p>Price: ${movieDetail.price}</p>
            <p>{movieDetail.description}</p>
        </div>
    )
}

export default MovieDetail