import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


import CardMovie from '../components/CardMovie'

const MoviesNowPlaying = () => {
    const navigate = useNavigate()
    const [movie, setMovie] = useState<[]>([])
    const API_TOKKENS = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWE0MGEzMDU0MTVlNTM1NDk0YTBkMzQ5YmQ1YTA3YiIsInN1YiI6IjY0ZTE4YjExNGE1MmY4MDBlNDM5NjEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5W-LKRloCKqPHww0cQL3wl5cA5aPtQtgGocAN2Pjg9I'

    const getMovie = () => {
        axios
            .get("3/movie/now_playing", {
                headers: {
                    Authorization: API_TOKKENS
                }
            })
            .then((response) => {
                setMovie(response?.data?.results)
            })
            .catch((error) => {
                console.log(error)
            })
    };

    const navigateTo = (id: number) => {
        navigate(`/movie/${id}`, { state: { id } })
    }

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
                        image={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                        overview={item?.overview}
                        onclick={() => navigateTo(item?.id)}
                    />
                ))}
            </div>
        </section>
    )
}

export default MoviesNowPlaying