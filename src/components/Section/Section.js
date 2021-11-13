import React from 'react';
import Menu from '../Menu/Menu'

import styles from './Section.module.css'

const Section = (props) => {
    return <div className={styles.section}>
        <Menu addItem={props.addItem} />
    </div>
}

export default Section;