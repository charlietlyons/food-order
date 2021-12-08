import React, { useState } from 'react';
import CartContext from '../../context/CartContext';
import Button from '../Button/Button'
import Row from '../Common/Row'

import styles from './Menu.module.css'

const PurchaseInputs = (props) => {
    const [amount, setAmount] = useState(0)

    return <CartContext.Consumer>
        { cartContext => {
            return <div className={styles.purchaseInputs}>
                <Row>
                Amount<input value={amount} type="number" className={styles.amount} min="0" onChange={(event) => { 
                    setAmount(event.target.value)}}/>
                </Row>
                <Button className={styles.addToCartButton} onClick={() => cartContext.updateItems({
                    title: props.itemProps.title,
                    description: props.itemProps.description,
                    price: props.itemProps.price,
                    amount: amount
                })}>+ Add</Button>
            </div>
        }}
    </CartContext.Consumer>
}

export default PurchaseInputs;
