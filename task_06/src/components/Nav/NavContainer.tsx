import React, { FC } from 'react';

import { PATH } from '../../app/Routes';
import { Nav } from './Nav';

export const NavContainer: FC = () => {
  const navLinks: Array<NavLinkType> = Object.entries(PATH).map(
    ([navTitle, navLink]) => ({
      title: navTitle.toLowerCase(),
      link: navLink,
    }),
  );
  const navLinksWithoutError404: Array<NavLinkType> = navLinks.slice(
    0,
    navLinks.length - 1,
  );

  return <Nav navLinks={navLinksWithoutError404} />;
};

export type NavLinkType = {
  link: string;
  title: string;
};
