import React, { FC, useState } from 'react';
import styles from './styles.module.scss';

interface IProps {
  numberOfPages: number;
  onClick: (page: number) => void;
}

const Pagination: FC<IProps> = ({ numberOfPages, onClick }) => {
  const { active: activeStyle, main: mainStyle, number_page: numberPageStyle } = styles;
  const [active, setActive] = useState(1);
  const isActive = (index: number) => (index === active ? `${activeStyle} ${numberPageStyle}` : numberPageStyle);

  const numberPageCreator = (index: number) => {
    return index + 1;
  };

  const handleClick = (pageNumber: number) => () => {
    onClick(pageNumber);
    setActive(pageNumber);
  };

  return (
    <div className={mainStyle}>
      {new Array(numberOfPages).fill(null).map((_, index) => (
        <div onClick={handleClick(numberPageCreator(index))} className={isActive(numberPageCreator(index))} key={index}>
          {numberPageCreator(index)}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
