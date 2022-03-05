import React, { FC, useState } from 'react';
import { numberPageCreator } from '../utils';
import styles from './styles.module.scss';

interface IProps {
  numberOfPages: number;
  onClick: (page: number) => void;
}

const Pagination: FC<IProps> = ({ numberOfPages, onClick }) => {
  const { active: activeStyle, main: mainStyle, number_page: numberPageStyle } = styles;
  const [active, setActive] = useState(1);
  const pages = numberPageCreator(numberOfPages);
  const isActive = (index: number) => (index === active ? `${activeStyle} ${numberPageStyle}` : numberPageStyle);

  const handleClick = (pageNumber: number) => () => {
    onClick(pageNumber);
    setActive(pageNumber);
  };

  return (
    <div className={mainStyle}>
      {pages.map((pageNumber) => (
        <div onClick={handleClick(pageNumber)} className={isActive(pageNumber)} key={pageNumber}>
          {pageNumber}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
