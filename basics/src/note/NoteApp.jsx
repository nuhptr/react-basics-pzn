import { useReducer } from "react"
import { useImmerReducer } from "use-immer"

import { NoteForm } from "./NoteForm"
import { NoteList } from "./NoteList"
import { NotesContext, NotesDispatchContext } from "./NoteContext"

const initialNotes = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Learn TypeScript" },
    { id: 3, text: "Learn React Native" },
    { id: 4, text: "Learn React Router" },
]

const notesReducer = (notes, action) => {
    if (action.type === "ADD_NOTE") {
        notes.push({ id: action.id, text: action.text, done: false })
    } else if (action.type === "CHANGE_NOTE") {
        const index = notes.findIndex((note) => note.id === action.id)
        notes[index].text = action.text
        notes[index].done = action.done
    } else if (action.type === "DELETE_NOTE") {
        const index = notes.findIndex((note) => note.id === action.id)
        notes.splice(index, 1)
    }
}

export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes)

    return (
        <NotesContext value={notes}>
            <NotesDispatchContext value={dispatch}>
                <h1>Note App</h1>
                <NoteForm />
                <NoteList />
            </NotesDispatchContext>
        </NotesContext>
    )
}
