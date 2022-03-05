import React from 'react';
import logo from '../../image/image.png';
import styles from './styles.module.scss';
import Navbar from '../../components/Navbar';
import { MENU } from '../../components/Navbar/config';

const Main = () => {
  const {
    container: containerStyle,
    content: contentStyle,
    imgContainer: imgContainerStyle,
    img: imgStyle,
    descriptionContainer: descriptionContainerStyle,
    description: descriptionStyle,
  } = styles;

  return (
    <div className={containerStyle}>
      <Navbar menu={MENU} />
      <div className={contentStyle}>
        <div className={imgContainerStyle}>
          <img className={imgStyle} src={logo} alt="To Do List Logo" />
        </div>
        <div className={descriptionContainerStyle}>
          <span className={descriptionStyle}>Данное приложение разработано для демонcтрации моих Hard skills</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
