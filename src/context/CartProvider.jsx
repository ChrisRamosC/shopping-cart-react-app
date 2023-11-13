import { useReducer } from "react"
import { CartContext } from "./CartContext"

const initialState = []

export const CartProvider = ({ children }) => {

    const shoppingReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CART] ADD_TO_CART':
                return [...state, action.payload]
            case '[CART] INCREASE_QUANTITY':
                return state.map(item => {
                    const quantity = item.quantity + 1
                    if (item.id === action.payload) {
                        return { ...item, quantity }
                    }
                    return item
                })
            case '[CART] DECREASE_QUANTITY':
                return state.map(item => {
                    const quantity = item.quantity - 1
                    if (item.id === action.payload && item.quantity > 1) {
                        return { ...item, quantity }
                    }
                    return item
                })
                break;
            case '[CART] REMOVE_FROM_CART':
                return state.filter(item => item.id !== action.payload)
            default:
                return state
        }
    }

    const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState)

    const addItem = (item) => {
        item.quantity = 1
        const action = {
            type: '[CART] ADD_TO_CART',
            payload: item
        }
        dispatch(action)
    }

    const increaseQuantity = (id) => {
        const action = {
            type: '[CART] INCREASE_QUANTITY',
            payload: id
        }
        dispatch(action)
    }

    const decreaseQuantity = (id) => {
        const action = {
            type: '[CART] DECREASE_QUANTITY',
            payload: id
        }
        dispatch(action)
    }

    const removeItem = (id) => {
        const action = {
            type: '[CART] REMOVE_FROM_CART',
            payload: id
        }
        dispatch(action)
    }



    return (
        <CartContext.Provider value={{ shoppingList, addItem, increaseQuantity, decreaseQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}
