import React from 'react';

import styles from './Menu.module.css'

const MenuItem = (props) => {
    return <div className={styles.itemInfo}>
            <h2>{props.title}</h2>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>${props.price}</div>
        </div>
}

export default MenuItem;