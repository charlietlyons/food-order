import React from 'react';

import styles from './Common.module.css'

const Column = (props) => {
    return <div className={`${props.className} ${styles.column}`}>
        {props.children}
    </div>
}

export default Column;