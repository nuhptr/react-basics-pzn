import { useState } from "react"

export default function Counter() {
    let [counter, setCounter] = useState(0)

    const increment = () => {
        // dirender 3x
        setCounter((prev) => prev + 1)
        setCounter((prev) => prev + 1)
        setCounter((prev) => prev + 1)
        console.log(counter)
    }

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <h1>Counter: {counter}</h1>
        </div>
    )
}
