import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

import Container from "./Container"
import HelloWorld from "./HelloWorld"
import TodoList from "../todolist/TodoList"
import Table from "../table/Table"
import AlertButton from "../button/AlertButton"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <TodoList />
            <Table />

            <AlertButton message="You click me!" />
        </Container>
    </StrictMode>
)
