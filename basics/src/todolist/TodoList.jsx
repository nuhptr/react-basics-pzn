import React from "react"

import Todo from "./Todo"

const DUMMY_TODO = [
    { id: 1, text: "Learn React", isCompleted: true, isDeleted: true },
    { id: 2, text: "Learn Redux", isCompleted: false },
    { id: 3, text: "Learn Next.js", isCompleted: false },
    { id: 4, text: "Learn Tailwind CSS", isCompleted: true },
    { id: 5, text: "Learn TypeScript", isCompleted: true },
    { id: 6, text: "Learn GraphQL", isCompleted: false },
]

export default function TodoList() {
    return (
        <ul>
            {DUMMY_TODO.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </ul>
    )
}
