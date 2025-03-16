import { useRef, useState } from "react"
import GuestbookForm from "./GuestbookForm"

export default function Guestbook() {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const nameInput = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        setName("")
        setMessage("")

        nameInput.current.focus()

        alert(`${name} said: ${message}`)
    }

    return (
        <>
            <h1>Guest Book</h1>
            <form action="">
                <GuestbookForm ref={nameInput} name={name} setName={setName} />
                <label htmlFor="message">Message</label> <br />
                <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <br />
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    )
}
