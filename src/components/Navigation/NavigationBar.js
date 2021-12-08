import React, { useContext } from 'react';
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import styles from './NavigationBar.module.css'
import Notification from '../Notification/Notification';
import CartContext from '../../context/CartContext'
import Row from '../Common/Row';

const NavigationBar = (props) => {
    const cartContext = useContext(CartContext);

    return <div className={styles.navigationBar}>
        <Logo />
        <Button className={styles.yourCartButton} onClick={props.onCartClick}>
            <Row className={styles.cartButtonInputs}>
                <img className={styles.shoppingCart} src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="shopping cart"/>
                Your Cart
                <Notification>{cartContext.totalItems}</Notification>
            </Row>
        </Button>
    </div>
}

export default NavigationBar;