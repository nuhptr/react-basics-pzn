import React from "react"

export default function SayHelloForm() {
    const handleClick = (e) => {
        e.preventDefault()
        const name = document.getElementById("input_name").value
        document.getElementById("text_hello").innerText = `Hello ${name}`
    }

    return (
        <div>
            <form action="">
                <input type="text" id="input_name" />
                <button>Say Hello</button>
            </form>
            <h1 id="text_hello">Hello World</h1>
        </div>
    )
}
