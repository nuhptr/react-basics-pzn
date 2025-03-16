import { use, useMemo, useRef, useState } from "react"

import Note from "./Note"
import { NotesContext } from "./NoteContext"

export function NoteList() {
    const notes = use(NotesContext)

    // TODO: Setup state and ref
    const [search, setSearch] = useState("")
    const searchInput = useRef(null)

    // TODO: Implementation of useMemo()
    const filteredNotes = useMemo(() => {
        console.log("Filtering notes...")
        return notes.filter((note) => note.text.includes(search))
    }, [notes, search])

    const handleSearch = () => {
        console.log("Searching...", searchInput.current.value)
        setSearch(searchInput.current.value)
    }

    return (
        <ul>
            <input type="text" ref={searchInput} placeholder="Search" />
            <button onClick={handleSearch}>Search</button>
            {filteredNotes.map((note) => (
                <li key={note.id}>
                    <Note note={note} />
                </li>
            ))}
        </ul>
    )
}
