import React, { FC } from "react"

interface ButtonProps {
    id: string
    label?: string
    onClick?: React.MouseEventHandler
}

const ButtonMovie: FC<ButtonProps> = ({ id, label, onClick }) => {
    return (
        <div>
            <button
                id={id}
                onClick={onClick}
                className="w-full h-12 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-700"
            >{label}</button>
        </div>

    )
}

export default ButtonMovie