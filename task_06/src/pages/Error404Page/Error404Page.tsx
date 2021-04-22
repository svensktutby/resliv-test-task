import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import s from './Error404Page.module.scss';

export const Error404Page: FC = () => {
  return (
    <div className={s.page}>
      <div className={s.main}>
        <h1 className={s.title}>404 - Page not&nbsp;found</h1>
        <p className={s.text}>
          —<span>Uh oh.</span> <span>¯\_(ツ)_/¯</span>—
        </p>
      </div>
      <footer className={s.footer}>
        <p className={s.footerText}>
          Take me back to:&nbsp;
          <Link className={s.link} to="/">
            home page
          </Link>
        </p>
      </footer>
    </div>
  );
};
