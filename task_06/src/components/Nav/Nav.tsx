import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import s from './Nav.module.scss';
import { randomId } from '../../utils/randomId';
import { NavLinkType } from './NavContainer';

type PropsType = {
  navLinks: Array<NavLinkType>;
};

export const Nav: FC<PropsType> = ({ navLinks }) => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        {navLinks.map(({ link, title }) => (
          <li key={randomId()} className={s.navItem}>
            <NavLink
              className={s.navLink}
              exact
              to={link}
              activeClassName={s.navLinkActive}
              replace
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
