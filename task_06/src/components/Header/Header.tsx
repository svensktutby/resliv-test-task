import React, { FC } from 'react';

import s from './Header.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Preloader } from '../common/Preloader';
import { NavContainer } from '../Nav/NavContainer';

export const Header: FC = () => {
  const loading = useTypedSelector<boolean>((state) => state.employees.loading);

  return (
    <header className={s.header}>
      {loading && <Preloader />}

      <div className={s.container}>
        <NavContainer />
      </div>
    </header>
  );
};
