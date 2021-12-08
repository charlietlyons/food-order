import React, { useContext } from 'react';
import Column from '../Common/Column'
import Row from '../Common/Row';
import Button from '../Button/Button'
import CartContext from '../../context/CartContext';

import styles from './Cart.module.css'

const CartItem = (props) => {
    const cartContext = useContext(CartContext)

    return <div className={styles.cartItem}>
        <Column>
            <p className={styles.itemTitle}>{props.item.title}</p>
            <Row className={styles.purchaseInfo}>
                <p className={styles.priceText}>${props.item.price}</p>
                <p>x</p>
                <p className={styles.amountText}>{props.item.amount}</p>
            </Row>
        </Column>
        <Column className={styles.cartItemInputs}>
            <Button className={styles.plusButton} onClick={() => cartContext.incrementItem(props.item)}>+</Button>
            <Button className={styles.minusButton} onClick={() => cartContext.decrementItem(props.item)}>-</Button>
        </Column>
    </div>
    
}

export default CartItem;