import React, { useContext } from 'react';
import Column from '../Common/Column'
import Button from '../Button/Button'

import styles from './Cart.module.css'
import CartContext from '../../context/CartContext';

const CartItem = (props) => {
    const cartContext = useContext(CartContext)

    return <div className={styles.cartItem}>
        <Column>
            <p>{props.item.title}</p>
            <p>${props.item.price}</p>
            <p>x{props.item.amount}</p>
        </Column>
        <Column className={styles.cartItemInputs}>
            <Button className={styles.plusButton} onClick={() => cartContext.incrementItem(props.item)}>+</Button>
            <Button className={styles.minusButton} onClick={() => cartContext.decrementItem(props.item)}>-</Button>
        </Column>
    </div>
    
}

export default CartItem;