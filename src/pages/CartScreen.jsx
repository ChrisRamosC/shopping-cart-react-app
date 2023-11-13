import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const CartScreen = () => {

    const { shoppingList, increaseQuantity, decreaseQuantity, removeItem } = useContext(CartContext)

    const calculateTotal = () => {
        return shoppingList.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)
    }

    const handlePrint = () => {

        window.print()
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>
                                <button
                                    className="btn btn-ouline-primary"
                                    onClick={() => decreaseQuantity(item.id)}>
                                    -
                                </button>
                                <button className="btn btn-primary">{item.quantity}</button>
                                <button
                                    className="btn btn-ouline-primary"
                                    onClick={() => increaseQuantity(item.id)}
                                >+
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => removeItem(item.id)}>X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th><b>TOTAL:</b></th>
                        <td></td>
                        <td></td>
                        <td>${calculateTotal()}</td>
                    </tr>
                </tfoot>
            </table>
            <div className="d-grid gap-2">
                <button
                    className="btn btn-primary"
                    onClick={handlePrint}
                    disabled={shoppingList.length === 0}
                >Comprar</button>
            </div>
        </>
    )
}
