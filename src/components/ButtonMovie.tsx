import React, {FC} from "react"

interface ButtonProps{
    id: string
    label? : string
    onClick? : React.MouseEventHandler
}

const ButtonMovie: FC<ButtonProps> = ({id, label, onClick}) => {
    return (
        <button
        id={id}
        onClick={onClick}
        className="w-full h-12 bg-blue-500 rounded-md text-white font-semibold"
        >{label}</button>
    )
}

export default ButtonMovie