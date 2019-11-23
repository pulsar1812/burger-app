import React, { Fragment } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const Modal = ({ children, show, modalClosed }) => (
  <Fragment>
    <Backdrop show={show} clicked={modalClosed} />
    <div
      className={styles.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      {children}
    </div>
  </Fragment>
);

export default Modal;
