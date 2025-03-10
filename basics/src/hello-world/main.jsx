import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

import Container from "./Container"
import HelloWorld from "./HelloWorld"
import TodoList from "../todolist/TodoList"
import Table from "../table/Table"
import AlertButton from "../button/AlertButton"
import MyButton from "../button/MyButton"
import Toolbar from "../button/Toolbar"
import SayHelloForm from "../form/SayHelloForm"
import SearchForm from "../form/SearchForm"
import Counter from "../form/Counter"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <TodoList />
            <Table />

            {/* Event handler */}
            <AlertButton message="You click me!" />
            <MyButton text="Click Me!" onSmash={() => alert("You smash me!")} />

            {/* Event propagation */}
            <Toolbar
                onClick={(e) => {
                    e.stopPropagation()
                    alert("You click toolbar!")
                }}
            />

            {/* Form & event preventDefault */}
            <SearchForm />
            <SayHelloForm />

            {/* State */}
            <Counter />
            <Counter />
        </Container>
    </StrictMode>
)
