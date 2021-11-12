import React from 'react';
import MenuItem from './MenuItem';

import styles from './Menu.module.css'

const Menu = () => {

    const ITEMS = [{
        title: "Big Fat Pizza Pie",
        description: "it's a thing",
        price: 299.99
    }, { 
        title: "Extra Large Pizza Ball",
        description: "Free delivery!",
        price: 1099.99 
    }, { 
        title: "Small Andy's Little Pizza Bites",
        description: "Bite sized pizza boys oooo they go in your mouth",
        price: 199.99
    }, {
        title: "Big Chucks Ol' Classic Pizza Bagels" ,
        description: "Big Chuck doesn't mess around",
        price: 7.99
    }];

    return <div className={styles.menu}>
        {ITEMS.map((item, index) => {
            return <MenuItem key={item.title + index} title={item.title} description={item.description} price={item.price}/>
        })}
    </div>
}

export default Menu;