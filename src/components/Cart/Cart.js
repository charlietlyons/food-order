import React, {useContext} from 'react'
import CartContext from '../../context/CartContext';
import CartItem from './CartItem';

import styles from './Cart.module.css'

const Cart = () => {
    const cartContext = useContext(CartContext);

    return <div className={styles.cart}>
            {cartContext.items.length > 0 ? cartContext.items.map((item, index) => {
                return <CartItem item={item} key={"cartItem-" + index}></CartItem>    
            }): ""}
            <hr style={{width:"99%", backgroundColor: "black", border: "1px solid black"}}/>
            <div className={styles.totalContainer}>
                <h2>Total:</h2>
                <div className={styles.totalPrice}>$ {cartContext.totalPrice.toFixed(2)}</div>
            </div>
    </div>
}

export default Cart;