import React from 'react';
import logo from '../../image/image.png';
import styles from './styles.module.scss';
import Navbar from '../../components/Navbar';
import { MENU } from '../../components/Navbar/config';

const Main = () => {
  return (
    <div className={styles.container}>
      <Navbar menu={MENU} />
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={logo} alt="To Do List" />
        </div>
        <div className={styles.descriptionContainer}>
          <span className={styles.description}>Данное приложение разработано для демонcтрации моих Hard skills</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
