import React from 'react';

import styles from './Menu.module.css'

const MenuItem = (props) => {
    return <div className={styles.itemInfo}>
            <h2>{props.value}</h2>
        </div>
}

export default MenuItem;