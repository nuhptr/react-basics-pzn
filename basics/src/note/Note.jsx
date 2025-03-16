import { use, useState } from "react"

import { NotesDispatchContext } from "./NoteContext"

export default function Note({ note }) {
    const dispatch = use(NotesDispatchContext)
    const [isEditing, setIsEditing] = useState(false)

    const handleChangeText = (event) => {
        dispatch({ ...note, type: "CHANGE_NOTE", text: event.target.value })
    }

    const handleChangeDone = (event) => {
        dispatch({ ...note, type: "CHANGE_NOTE", done: event.target.checked })
    }

    const handleDelete = (note) => {
        dispatch({ type: "DELETE_NOTE", id: note.id })
    }

    let component

    if (isEditing) {
        component = (
            <>
                <input value={note.text} onChange={handleChangeText} />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        component = (
            <>
                {note.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
            {component}
            <button onClick={handleDelete}>Delete</button>
        </label>
    )
}
