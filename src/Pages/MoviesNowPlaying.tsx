import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardMovie from '../components/CardMovie'

const MoviesNowPlaying = () => {

    const [movie, setMovie] = useState<[]>()

    const API_URL = 'https://api.themoviedb.org/3/movie/now_playing'
    const API_TOKKENS = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWE0MGEzMDU0MTVlNTM1NDk0YTBkMzQ5YmQ1YTA3YiIsInN1YiI6IjY0ZTE4YjExNGE1MmY4MDBlNDM5NjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5W-LKRloCKqPHww0cQL3wl5cA5aPtQtgGocAN2Pjg9I'

    const getMovie = () => {
        axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${API_TOKKENS}`
            }
        })
            .then((response) => {
                setMovie(response?.data?.results)
            })
            .catch((error) => {
                console.log(error)
            })
    };

    useEffect(() => {
        getMovie()
    }, [movie])

    return (
        <section>
            <div className='flex flex-wrap gap-3 justify-center pt-4'>
                {movie && movie.map((item: any, index) => (
                    <CardMovie
                        id={item?.id}
                        key={index}
                        title={item?.original_title}
                        image={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default MoviesNowPlaying