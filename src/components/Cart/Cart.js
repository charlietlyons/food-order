import React from 'react'

import styles from './Cart.module.css'
import CartItem from './CartItem';


const Cart = (props) => {
    function renderItems() {
        if (props.items) {
            props.items.map((item, index) => {
                return <CartItem key={item.title + index} title={item.title} amount={item.amount} price={item.price} />    
            })
        }
    }

    return <div className={styles.cart}>
        {renderItems()}    
    </div>
}

export default Cart;