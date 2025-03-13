import { useState } from "react"

export default function Counter({ name }) {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    return (
        <div className="">
            <h1 className="">
                Counter {name}: {count}
            </h1>
            <button className="" onClick={handleIncrement}>
                Increment
            </button>
        </div>
    )
}
