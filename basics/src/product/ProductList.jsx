import { useEffect, useRef, useState } from "react"

import Product from "./Product"

export default function ProductList() {
    const [products, setProducts] = useState([])
    // const loaded = useRef(false)
    const [load, setLoaded] = useState(false)

    const handleClick = () => {
        setLoaded(true)
    }

    // TODO: Just call once when component is mounted
    useEffect(() => console.info("Call Use Effect with empty array"), [])

    useEffect(() => {
        console.info("Call Use Effect")
        if (load) {
            fetch("/product.json")
                .then((response) => response.json())
                .then((data) => setProducts(data))
        }

        return () => {
            console.info("Call Use Effect Clean Up")
        }
    }, [load])

    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Products</button>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </>
    )
}
