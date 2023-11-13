import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ShoppingScreen } from "./pages/ShoppingScreen"
import { CartScreen } from "./pages/CartScreen"
import { ProductsProvider } from "./context/ProductsProvider"
import { CartProvider } from "./context/CartProvider"

export const CartApp = () => {
    return (
        <ProductsProvider>
            <CartProvider>
                <NavBar ></NavBar>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ShoppingScreen></ShoppingScreen>}></Route>
                        <Route path="/cart" element={<CartScreen></CartScreen>}></Route>
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductsProvider>
    )
}
