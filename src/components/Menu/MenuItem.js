import React from 'react';
import PurchaseInputs from './PurchaseInputs'
import MenuItemInfo from './MenuItemInfo'

import styles from './Menu.module.css'

const MenuItem = (props) => {
    return <div className={styles.menuItem}>
        <MenuItemInfo title={props.title} description={props.description} price={props.price} ></MenuItemInfo>
        <PurchaseInputs></PurchaseInputs>
    </div>
}

export default MenuItem;