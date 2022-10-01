import React from 'react';
import { Link } from 'react-router-dom';

import resultIcon from '../../assets/img/result-icon.svg';

import styles from './Result.module.scss';

const Result = ({ correctCount, size }) => {
  return (
    <div className={styles.root}>
      <img width='250' src={resultIcon} alt='Result icon' />
      <h2>
        Вы отгадали {correctCount} из {size}
      </h2>
      <Link to='/'>
        <button>На главную</button>
      </Link>
    </div>
  );
};

export default Result;
