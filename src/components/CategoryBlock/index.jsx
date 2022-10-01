import React from 'react';
import { Link } from 'react-router-dom';

import playIcon from '../../assets/img/play-icon.svg';
import successIcon from '../../assets/img/success-icon.svg';
import categories from '../../assets/categories.json';

import styles from './CategoryBlock.module.scss';

const CategoryBlock = () => {
  return (
    <ul>
      {categories.map((category) => (
        <Link to={`/category/${category.id}`} key={category.id}>
          <li className={styles.category}>
            <img className={styles.mainIcon} src={category.svg} alt='Travel icon' />
            <img
              width='25'
              src={!category.isCompleted ? playIcon : successIcon}
              alt='isCompleted icon'
            />
            <span>{category.title}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default CategoryBlock;
