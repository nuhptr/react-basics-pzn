import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

import Container from "./Container"
import HelloWorld from "./HelloWorld"
import TodoList from "../todolist/TodoList"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <TodoList />
        </Container>
    </StrictMode>
)
