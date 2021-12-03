import React from 'react';
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import styles from './NavigationBar.module.css'
import Row from '../Common/Row';

const NavigationBar = (props) => {
    return <div className={styles.navigationBar}>
        <Logo />
        <Button className={styles.yourCartButton} onClick={props.onCartClick}>
            <Row>
                <img className={styles.shoppingCart} src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="shopping cart"/>
                Your Cart
            {/* <Notifcation></> */}
            </Row>
        </Button>
    </div>
}

export default NavigationBar;