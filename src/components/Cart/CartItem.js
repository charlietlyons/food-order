import React from 'react';
import Column from '../Common/Column'
import Button from '../Button/Button'

import styles from './Cart.module.css'

const CartItem = (props) => {
    return <div className={styles.cartItem}>
        <Column>
            <p>{props.title}</p>
            <p>${props.price}</p>
            <p>x{props.amount}</p>
        </Column>
        <Column>
            <Button>+</Button>
            <Button>-</Button>
        </Column>
    </div>
    
}

export default CartItem;