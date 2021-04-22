import React, { FC } from 'react';

import s from './Main.module.scss';

export const Main: FC = ({ children }) => {
  return (
    <main className={s.main}>
      <div className={s.container}>{children}</div>
    </main>
  );
};
