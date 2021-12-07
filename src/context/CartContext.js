import React, { useReducer, useState } from 'react'
import ItemReducer from "../reducers/ItemReducer"

const CartContext = React.createContext()

export const CartContextProvider = (props) => {
    const [items, dispatch] = useReducer(ItemReducer, [])
    const [totalPrice, setTotalPrice] = useState(0.00);
    const [totalItems, setTotalItems] = useState(0);

    return <CartContext.Provider value={{
        items: items,
        totalPrice: totalPrice,
        totalItems: totalItems,
        updateItems: (newItem) => {
            setTotalItems(totalItems + parseInt(newItem.amount))
            setTotalPrice(totalPrice + parseFloat(newItem.price));
            dispatch(newItem);
        } 
    }}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;