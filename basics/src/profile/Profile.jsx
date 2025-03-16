import { use, useContext } from "react"
import { ProfileContext } from "./ProfileContext"

export default function Profile() {
    const profile = use(ProfileContext)

    return (
        <>
            <h2>Profile</h2>
            <p>Hello {profile}</p>
        </>
    )
}
