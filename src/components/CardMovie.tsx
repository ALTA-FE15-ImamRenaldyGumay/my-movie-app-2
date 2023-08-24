import React, { FC } from 'react'

import ButtonMovie from './ButtonMovie'

interface cardMovieProps {
    id: string
    title?: string
    image?: string
    overview?: string
    onclick?: React.MouseEventHandler
}

const CardMovie: FC<cardMovieProps> = ({ id, title, image, overview, onclick }) => {

    return (
        <div id={id} className='w-80 h-full bg-alto-600 rounded-md shadow-md'>
            <img
                className='h-full w-full  rounded-md mb-3'
                src={image} alt="movie-poster" />
            <h2 className='text-black text-2xl text-center'>{title}</h2>
            <p className='p-3'>{overview}</p>
            <ButtonMovie id="detail" label="Details" onClick={onclick} />
        </div>
    )
}

export default CardMovie