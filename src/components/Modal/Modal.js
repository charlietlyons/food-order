import React from 'react'
import Cart from '../Cart/Cart';
import Row from '../Common/Row';

import styles from './Modal.module.css'

const Modal = (props) => {
    return <Row>
        <div className={ props.showModal ? styles.modal : styles.hiddenModal}>
            <Cart items={props.items}/>
        </div>
    </Row>
    
}

export default Modal;