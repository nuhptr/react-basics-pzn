import { useState } from "react"

export default function TaskForm({ onSubmit }) {
    const [item, setItem] = useState("")

    const handleChange = (event) => {
        setItem(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(item)
        setItem("")
    }

    return (
        <div>
            <h1>Task Form</h1>
            <form>
                <input type="text" value={item} onChange={handleChange} />
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}
