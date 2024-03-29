import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, removeFavorites } from '../features/AddFavorites';

import ButtonMovie from './ButtonMovie'

interface cardMovieProps {
    id: string
    title?: string
    image?: string
    // overview?: string
    onclick?: React.MouseEventHandler
    // onAddFavorites: (id: string, title: string, image: string) => void
    // onRemoveFavorites: (id: string) => void
    isFavorites?: boolean
}

const CardMovie: FC<cardMovieProps> = ({ id, title, image, onclick, isFavorites }) => {
    const dispatch = useDispatch()

    const handleFavoritesClick = () => {
        if (isFavorites) {
            dispatch(removeFavorites(id))
        }else{
            dispatch(addFavorites({ id, title: title || '', image: image || ''}))
        }
    }

    return (
        <div id={id} className="p-4 m-8 w-80 bg-yellow-200 shadow-md rounded-xl">
            <picture className="rounded-lg block">
                <img src={image} />
            </picture>

            <h1 className="mt-4 mb-2 text-xl font-bold">{title}</h1>
            <p className="text-sm text-black mb-3">
                {/* {overview} */}
            </p>
            <div className="">
                <ButtonMovie id="detail" label="Details" onClick={onclick} />
                <button onClick={handleFavoritesClick}>
                    {isFavorites ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            </div>

        </div>
    )
}

export default CardMovie