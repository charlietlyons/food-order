import React, {useContext} from 'react'
import CartContext from '../../context/CartContext';

import styles from './Cart.module.css'
import CartItem from './CartItem';

const Cart = () => {
    const cartContext = useContext(CartContext);

    return <div className={styles.cart}>
        <div className={styles.cartList}>
            {cartContext.items.map((item, index) => {
                return <CartItem key={item.title + index} title={item.title} amount={item.amount} price={item.price}></CartItem>    
            })}
        </div>
        <h2>Total {cartContext.total.toFixed(2)}</h2>
    </div>
}

export default Cart;