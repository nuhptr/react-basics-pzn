import { use, useContext } from "react"
import { ProfileContext } from "./ProfileContext"

export default function ProfileAddress() {
    const profile = use(ProfileContext)

    return (
        <>
            <h2>Profile Address</h2>
            <p>Alamat {profile}</p>
        </>
    )
}
