import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonMovie from './ButtonMovie'
// import Cookie from 'js-cookie'

interface cardMovieProps {
    id: string,
    title?: string,
    image?: string,
}

const CardMovie: FC<cardMovieProps> = ({ id, title, image }) => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/Detail/${id}`)
    }

    return (
        <div id={id} className='w-80 h-full bg-alto-600 rounded-md shadow-md'>
            <img
                className='w-full h-full rounded-md mb-3'
                src={image} alt="movie-poster" />
            <h2 className='text-black text-2xl text-center'>{title}</h2>
            <ButtonMovie id={id} label="Details" onClick={handleClick} />
        </div>
    )
}

export default CardMovie