import { use } from "react"

import Note from "./Note"
import { NotesContext } from "./NoteContext"

export function NoteList() {
    const notes = use(NotesContext)

    return (
        <ul>
            {notes.map((note) => (
                <li key={note.id}>
                    <Note note={note} />
                </li>
            ))}
        </ul>
    )
}
