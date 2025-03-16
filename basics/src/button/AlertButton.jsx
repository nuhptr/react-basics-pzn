import React, { useRef } from "react"

export default function AlertButton({ text = "Click Me!", message }) {
    const counter = useRef(0)

    const handleClick = (e) => {
        console.info(e.target)
        alert(message, counter.current++)
    }

    return <button onClick={handleClick}>{text}</button>
}
