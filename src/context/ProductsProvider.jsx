import { ProductsContext } from "./ProductsContext"
import { useState, useEffect } from "react"

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}
