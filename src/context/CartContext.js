import React, { useReducer, useState } from 'react'
import ItemReducer from "../reducers/ItemReducer"

const CartContext = React.createContext()

export const CartContextProvider = (props) => {
    const [items, dispatch] = useReducer(ItemReducer, [])
    const [totalPrice, setTotalPrice] = useState(0.00);
    const [totalItems, setTotalItems] = useState(0);

    function adjustTotals(itemsAdjustment,priceAdjustment) {
        setTotalItems(totalItems + itemsAdjustment)
        setTotalPrice(totalPrice + priceAdjustment);
    }

    return <CartContext.Provider value={{
        items: items,
        totalPrice: totalPrice,
        totalItems: totalItems,
        updateItems: (item) => {
            if (parseInt(item.amount) > 0) {
                adjustTotals(parseInt(item.amount), parseFloat(item.price) * parseInt(item.amount));
                dispatch({
                    item: item,
                    type: "menuAdd"
                });
            }
        },
        incrementItem: (item) => {
            adjustTotals(1, parseFloat(item.price));
            dispatch({
                    item: item,
                    type: "increment"
                });
        },
        decrementItem: (item) => {
            adjustTotals(-1, -parseFloat(item.price));
            dispatch({
                    item: item,
                    type: "decrement"
                });
        }
    }}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;