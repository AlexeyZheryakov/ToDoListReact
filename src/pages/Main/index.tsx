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
    header: headerStyle,
  } = styles;

  return (
    <div className={containerStyle}>
      <header className={headerStyle}>
        <Navbar menu={MENU} />
      </header>
      <div className={contentStyle}>
        <div className={imgContainerStyle}>
          <img className={imgStyle} src={logo} alt="To Do List Logo" />
        </div>
        <div className={descriptionContainerStyle}>
          <span className={descriptionStyle}>Made especially for WelbeX</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
