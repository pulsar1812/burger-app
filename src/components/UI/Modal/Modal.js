import React, { Fragment, Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

// const Modal = ({ children, show, modalClosed }) => (
//   <Fragment>
//     <Backdrop show={show} clicked={modalClosed} />
//     <div
//       className={styles.Modal}
//       style={{
//         transform: show ? 'translateY(0)' : 'translateY(-100vh)',
//         opacity: show ? '1' : '0'
//       }}
//     >
//       {children}
//     </div>
//   </Fragment>
// );

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  UNSAFE_componentWillUpdate() {
    console.log('[Modal] WillUpdate');
  }

  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
