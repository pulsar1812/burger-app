import React, { Fragment } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <Fragment>
    <Toolbar />
    <SideDrawer />
    <main className={styles.Content}>{children}</main>
  </Fragment>
);

export default Layout;
