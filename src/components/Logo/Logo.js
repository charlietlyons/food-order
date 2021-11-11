import React from "react";

import styles from './Logo.module.css'

const Logo = () => {
    return <div className={styles.logoContainer}>
            <h1 className={styles.h1}>Al's Big Fat Pizzeria</h1>
            <p className={styles.p}>It's Food!</p>
    </div>
}

export default Logo;