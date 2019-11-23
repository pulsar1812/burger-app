import React from 'react';
import PropTypes from 'prop-types';

import styles from './BuildControl.module.css';

const BuildControl = ({ label, added, removed, disabled }) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{label}</div>
    <button className={styles.Less} onClick={removed} disabled={disabled}>
      Less
    </button>
    <button className={styles.More} onClick={added}>
      More
    </button>
  </div>
);

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  added: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default BuildControl;
