import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'

import styles from './Notification.module.css'

const Notification = () => {
    const cartContext = useContext(CartContext)

    return <div className={styles.notification}>
        {cartContext.totalItems}
    </div>    
}

export default Notification;