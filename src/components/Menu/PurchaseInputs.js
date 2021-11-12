import React from 'react';
import Button from '../Button/Button'
import Row from '../Common/Row'

import styles from './Menu.module.css'

const MenuItem = (props) => {
    return <div className={styles.purchaseInputs}>
        <Row>
            Amount<input defaultValue="0" type="number" className={styles.amount}/>
        </Row>
        <Button className={styles.addToCartButton} displayValue="Add to Cart" />
    </div>
}

export default MenuItem;
