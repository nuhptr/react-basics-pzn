import { useState } from "react"

import Profile from "./Profile"
import ProfileAddress from "./ProfileAddress"

import { ProfileContext } from "./ProfileContext"
import ProfilForm from "./ProfileForm"

export default function ProfileApp() {
    const [name, setName] = useState("Eko")

    return (
        <>
            <ProfileContext value="Eko">
                <h1>Profile App</h1>
                <ProfilForm name={name} setName={setName} />
                <Profile />
                <ProfileAddress />
            </ProfileContext>
        </>
    )
}
