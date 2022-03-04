import React, { FC, useState } from 'react';
import styles from './styles.module.scss';

interface IProps {
  numberOfPages: number;
  onClick: (page: number) => void;
}

const Pagination: FC<IProps> = ({ numberOfPages, onClick }) => {
  const [active, setActive] = useState(0);
  const handleClick = (i: number) => () => {
    onClick(i);
    setActive(i);
  };
  const count = [];
  for (let i = 0; i < numberOfPages; i++) {
    count.push(i + 1);
  }
  return (
    <div className={styles.main}>
      {count.map((i) => (
        <div onClick={handleClick(i)} className={styles.number} key={i}>
          {i}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
