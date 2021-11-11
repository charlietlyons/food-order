import React from 'react';
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import styles from './NavigationBar.module.css'

const NavigationBar = () => {
    return <div className={styles.navigationBar}>
        <Logo />
        <Button displayValue="Your Cart" />
    </div>
}

export default NavigationBar;