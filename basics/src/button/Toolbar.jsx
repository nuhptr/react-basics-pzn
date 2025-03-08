import React from "react"

// Propagation of event can be stopped by calling `event.stopPropagation()` on parent component
export default function Toolbar({ onClick }) {
    return (
        <div onClick={onClick} style={{ backgroundColor: "yellow" }}>
            <button onClick={onClick}>First</button>
            <button onClick={onClick}>Second</button>
        </div>
    )
}
