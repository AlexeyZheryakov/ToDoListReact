import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { IMenu } from './types';

interface IProps {
  menu: IMenu[];
}

const Navbar: FC<IProps> = ({ menu }) => {
  const { navbar: navbarStyle, link: linkStyle } = styles;

  return (
    <nav className={navbarStyle}>
      <ul>
        {menu.map(({ label, link }, index) => (
          <li key={index}>
            <Link className={linkStyle} to={link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
