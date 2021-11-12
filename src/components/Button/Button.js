import React from 'react';

import styles from './Button.module.css'

const Button = (props) => {
    return <button className={props.className ? props.className : styles.button}>{props.displayValue}</button>
}

export default Button;