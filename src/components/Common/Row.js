import React from 'react';

import styles from './Common.module.css'

const Row = (props) => {
    return <div className={`${props.className} ${styles.row}`}>
        {props.children}
    </div>
}

export default Row;