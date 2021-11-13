import React, { useRef } from 'react';
import Button from '../Button/Button'
import Row from '../Common/Row'

import styles from './Menu.module.css'

const PurchaseInputs = (props) => {
    const inputRef = useRef()

    function addItemToCart() {
        props.itemProps.addItem({
            title: props.itemProps.title,
            description: props.itemProps.description,
            price: props.itemProps.price,
            amount: inputRef.current.value
        })
    }

    return <div className={styles.purchaseInputs}>
        <Row>
            Amount<input ref={inputRef} defaultValue="0" type="number" className={styles.amount}/>
        </Row>
        <Button className={styles.addToCartButton} onClick={addItemToCart}>+ Add</Button>
    </div>
}

export default PurchaseInputs;
