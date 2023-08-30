import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import CardMovie from '../components/CardMovie';

const MovieDetail = () => {

    const location = useLocation();
    const id = location?.state?.id;
    
    const [movieDetail, setMovieDetail] = useState({ id });
    const API_TOKKENS = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWE0MGEzMDU0MTVlNTM1NDk0YTBkMzQ5YmQ1YTA3YiIsInN1YiI6IjY0ZTE4YjExNGE1MmY4MDBlNDM5NjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5W-LKRloCKqPHww0cQL3wl5cA5aPtQtgGocAN2Pjg9I'

    const getSingleMovie = (id: any) => {
        axios.get(`3/movie/${id}`, {
            headers: {
                Authorization: `Bearer ${API_TOKKENS}`
            }
        })
            .then((response) => {
                setMovieDetail(response?.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getSingleMovie(id)
    }, [])

    return (
        <section>
            <div>
                <CardMovie 
                    title={movieDetail?.original_title}
                    image={`https://image.tmdb.org/t/p/w500${movieDetail?.backdrop_path}`}
                    overview={movieDetail?.overview} />
            </div>
        </section>
    )
}

export default MovieDetail