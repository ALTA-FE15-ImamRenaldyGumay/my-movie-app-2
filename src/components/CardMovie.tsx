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
        <div id={id} className="p-4 m-8 w-80 bg-yellow-200 shadow-md rounded-xl">
            <picture className="rounded-lg block">
                <img src={image} />
            </picture>

            <h1 className="mt-4 mb-2 text-xl font-bold">{title}</h1>
            <p className="text-sm text-black mb-3">
                {overview}
            </p>
            <div className="">
                <ButtonMovie id="detail" label="Details" onClick={onclick} />
            </div>

        </div>
    )
}

export default CardMovie