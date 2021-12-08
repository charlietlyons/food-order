import React from 'react'
import Button from '../Button/Button';
import Cart from '../Cart/Cart';
import Row from '../Common/Row';
import Column from '../Common/Column';

import styles from './Modal.module.css'

const Modal = (props) => {
    return <Row>
        <div className={props.showModal ? styles.modalBackfill : styles.hiddenModal}>ghfh</div>
        <Column className={ props.showModal ? styles.modal : styles.hiddenModal}>
            <Cart />
            <Row>
                <Button className={styles.closeButton} onClick={() => props.onCloseModal()}>Close</Button>
                <Button className={styles.orderButton} onClick={() => console.log("Ordering...")}>Order</Button>
            </Row>
        </Column>
    </Row>
}

export default Modal;