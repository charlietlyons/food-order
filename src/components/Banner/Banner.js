import React from 'react'

import styles from './Banner.module.css'
import BannerMessage from './BannerMessage';

const Banner = () => {
    return <div className={styles.bannerContainer}>
        <div className={styles.banner} >
            <BannerMessage title="Big Fat Pizza! Made of food!" message="Our pizza is bake with the freshest, most real ingredients, contains no snakes, and has passed several health inspections"/>
            <div className={styles.edge} />
        </div>
    </div>
    
}

export default Banner;