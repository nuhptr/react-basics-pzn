import React from "react"

export default function Todo({ text, isCompleted, isDeleted = false }) {
    if (isDeleted) return null
    else
        return (
            <li className="completed">
                {text} {isCompleted && "✅ "}
            </li>
        )
}
