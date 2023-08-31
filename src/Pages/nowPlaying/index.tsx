import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
import axios from 'axios'


import CardMovie from '../../components/CardMovie'

const NowPlaying = () => {
    const navigate = useNavigate();

    const [movie, setMovie] = useState<any[]>([]);
    // const [favorites, setFavorites] = useState<any[]>([])
    const favorites = useSelector((state: any) => state.favorites.favorites)
    
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

    const MAX_TITLE_LENGTH = 20;
    return (
        <section >
            <h1 className='text-5xl font-bold flex justify-start'>Movie List</h1>
            <div className='flex gap-2 justify-center items-start pt-4'>
                {movie && movie.map((item: any, index) => (
                    <CardMovie
                        id={item?.id}
                        key={index}
                        title={item?.original_title}
                        image={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                        // overview={item?.overview > MAX_TITLE_LENGTH ? `${item?.overview.slice(0, MAX_TITLE_LENGTH)}...` : item?.overview}
                        onclick={() => navigateTo(item?.id)}
                        isFavorites={favorites.some((favorites: any) => favorites.id === item.id)}
                    />
                ))}
            </div>
            <h1 className='text-5xl font-bold flex justify-start'>Favorites</h1>
            <div className='flex gap-2 justify-center items-start pt-4'>
                {favorites.map((item: any, index) => (
                    <li key={item.id}>{item?.title}</li>
                ))}
            </div>
        </section>
    )
}

export default NowPlaying