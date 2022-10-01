import React from 'react';

import CategoryBlock from '../../components/CategoryBlock';
import Header from '../../components/Header';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.root}>
      <Header />
      <CategoryBlock />
    </div>
  );
};

export default Home;
