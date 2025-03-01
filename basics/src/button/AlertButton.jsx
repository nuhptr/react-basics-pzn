import React from "react"

export default function AlertButton({ text = "Click Me!", message }) {
    const handleClick = () => {
        alert(message)
    }

    return <button onClick={handleClick}>{text}</button>
}
