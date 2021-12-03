import React, { useReducer } from 'react'
import ItemReducer from "../reducers/ItemReducer"

const CartContext = React.createContext()

export const CartContextProvider = (props) => {
    const [items, dispatch] = useReducer(ItemReducer, [])

    return <CartContext.Provider value={{
        items: items,
        updateItems: (newItem) => {
            dispatch(newItem)
        } 
    }}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;