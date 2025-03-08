import React from "react"

export default function SearchForm() {
    return (
        <form>
            <input type="text" />
            <button
                onClick={(event) => {
                    event.preventDefault()
                    alert("Searching...")
                }}
            >
                Search
            </button>
        </form>
    )
}
