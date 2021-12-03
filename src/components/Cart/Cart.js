import React, {useContext} from 'react'
import CartContext from '../../context/CartContext';

import styles from './Cart.module.css'
import CartItem from './CartItem';

const Cart = () => {
    const cartContext = useContext(CartContext);

    return <div className={styles.cart}>
        {cartContext.items.map((item, index) => {
            return <CartItem key={item.title + index} title={item.title} amount={item.amount} price={item.price}></CartItem>    
        })}
    </div>
}

export default Cart;