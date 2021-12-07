import React from 'react'

import styles from './Notification.module.css'

const Notification = (props) => {
    return <div>
        <div className={styles.notification}>
            {props.children}
        </div>
    </div>
    
}

export default Notification;