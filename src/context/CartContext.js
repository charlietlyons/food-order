import React, { useReducer, useState } from 'react'
import ItemReducer from "../reducers/ItemReducer"

const CartContext = React.createContext()

export const CartContextProvider = (props) => {
    const [items, dispatch] = useReducer(ItemReducer, [])
    const [total, setTotal] = useState(0);

    return <CartContext.Provider value={{
        items: items,
        total: total,
        updateItems: (newItem) => {
            console.log(total)
            console.log(newItem.price)
            setTotal(total + parseFloat(newItem.price));
            dispatch(newItem);
        } 
    }}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;