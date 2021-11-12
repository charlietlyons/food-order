import React from 'react';

import styles from './Banner.module.css'

const BannerMessage = (props) => {
    return <div className={styles.bannerMessage}>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
    </div>
}

export default BannerMessage;