import React from 'react'

import styles from './Cart.module.css'
import CartItem from './CartItem';


const Cart = (props) => {
    return <div className={styles.cart}>
        {props.items.map((item, index) => {
            return <CartItem key={item.title + index} title={item.title} amount={item.amount} price={item.price}></CartItem>    
        })}    
    </div>
}

export default Cart;