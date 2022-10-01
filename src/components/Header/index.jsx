import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Let`s Play</h1>
      <h4>Be the first!</h4>
    </div>
  );
};

export default Header;
