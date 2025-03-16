import { use, useState } from "react"
import { NotesDispatchContext } from "./NoteContext"

export function NoteForm() {
    const [text, setText] = useState("")
    const dispatch = use(NotesDispatchContext)

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleClick = () => {
        dispatch({ type: "ADD_NOTE", text: text })
        setText("")
    }

    return (
        <>
            <input type="text" placeholder="Add Note" value={text} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
        </>
    )
}
