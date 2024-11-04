import React from 'react';
import { Link } from '@tanstack/react-router';
import { adminNavItems, userNavItems } from '../constants/nav.constants';
import styles from './global_nav_bar.module.css';
import alteration from '../assets/icon/alteration.svg';
import add from '../assets/icon/add.svg';

type Mode = 'admin' | 'user';

interface GlobalNavBarProps {
  mode?: Mode;
}

const GlobalNavBar: React.FC<GlobalNavBarProps> = ({ mode = 'user' }) => {
  const navItems = mode === 'admin' ? adminNavItems : userNavItems;

  return (
    <div className={styles.container}>
      {navItems.map((item) => (
        <Link key={item.name} to={item.to}>
          <img src={item.icon} alt="" />
          {item.name && <p>{item.name}</p>}
        </Link>
      ))}

      <Link className={styles.pop_btn} to={mode === 'admin' ? '/' : '/alteration'}>
        <img src={mode === 'admin' ? alteration : add} alt="" />
      </Link>
    </div>
  );
};

export default GlobalNavBar;
