import React from 'react';
import Button from '../Button/Button'
import Row from '../Common/Row'

import styles from './Menu.module.css'

const MenuItem = () => {
    return <div className={styles.purchaseInputs}>
        <Row>
            Amount<input defaultValue="0" type="number" className={styles.amount}/>
        </Row>
        <Button className={styles.addToCartButton}>+ Add</Button>
    </div>
}

export default MenuItem;
