import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import Guestbook from "./Guestbook"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Guestbook />
    </StrictMode>
)
