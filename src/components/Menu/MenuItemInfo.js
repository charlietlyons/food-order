import React from 'react';

import styles from './Menu.module.css'

const MenuItem = (props) => {
    return <div className={styles.itemInfo}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <b>${props.price}</b>
        </div>
}

export default MenuItem;