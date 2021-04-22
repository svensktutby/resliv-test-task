import React, { FC } from 'react';

import s from './Preloader.module.scss';

export const Preloader: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.bar} />
    </div>
  );
};
