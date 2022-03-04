import React, { FC } from 'react';
import styles from './styles.module.scss';

interface IProps {
  type: 'submit' | 'button' | 'reset' | undefined;
  text: string;
  onClick?: () => void;
  mr?: boolean;
}

const MyButton: FC<IProps> = ({ text, type, onClick, mr }) => {
  const className = mr ? `${styles.btn_mr} ${styles.btn}` : styles.btn;
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button onClick={handleClick} type={type} className={className}>
      {text}
    </button>
  );
};

export default MyButton;
