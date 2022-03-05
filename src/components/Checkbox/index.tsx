import React, { FC } from 'react';
import styles from './styles.module.scss';
import logo from '../../image/image.png';

interface IProps {
  isActive: boolean;
  onClick: () => void;
}

const Checkbox: FC<IProps> = ({ isActive, onClick }) => {
  const { checkbox: checkboxStyle, img: imgStyle } = styles;
  const handleClick = () => {
    onClick();
  };

  return (
    <div onClick={handleClick} className={checkboxStyle}>
      {isActive && (
        <div>
          <img className={imgStyle} src={logo} alt="x" />
        </div>
      )}
    </div>
  );
};

export default Checkbox;
