import React, { useState } from "react"
import Counter from "./Counter"

export default function CounterApp() {
    const [show2, setShow2] = useState(false)

    const handleChange = (e) => {
        setShow2(e.target.checked)
    }

    return (
        <div>
            {/* State dipertahankan gara-gara posisinya sama */}
            {show2 ? <Counter name="Budi" /> : <p>Hilang</p>}
            <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan 2 Counter
        </div>
    )
}
