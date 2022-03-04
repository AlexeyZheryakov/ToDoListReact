import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { IMenu } from './types';

interface IProps {
  menu: IMenu[];
}

const Navbar: FC<IProps> = ({ menu }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.menuList}>
        {menu.map(({ label, link }, index) => (
          <li key={index}>
            <Link className={styles.link} to={link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
