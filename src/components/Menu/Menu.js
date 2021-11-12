import React from 'react';
import MenuItem from './MenuItem';

import styles from './Menu.module.css'

const Menu = () => {
    const ITEMS = [{ value: "Big Fat Pizza Pie" }, { value: "Extra Large Pizza Ball" }, { value: "Small Andy's Little Pizza Bites" }, { value: "Big Chucks Ol' Classic Pizza Bagels" }];

    return <div className={styles.menu}>
        {ITEMS.map((item) => {
            return <MenuItem value={item.value} />
        })}
    </div>
}

export default Menu;