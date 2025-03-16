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
            {/* {show2 ? <Counter name="Budi" /> : <p>Hilang</p>} */}
            {/* Reset state */}
            {show2 ? <Counter key="budi" name="Budi" /> : <Counter key="eko" name="Eko" />}
            {/* Beda posisi, state tidak dipertahankan */}
            {/* {show2 && <Counter name="Budi" />} */}
            {/* {!show2 && <Counter name="Eko" />} */}
            <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan 2 Counter
        </div>
    )
}
