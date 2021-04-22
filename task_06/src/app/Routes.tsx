import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { EmployeesPage } from '../pages/EmployeesPage';
import { Error404Page } from '../pages/Error404Page';

export const PATH = {
  MAIN: '/',
  EMPLOYEES: '/employees',
  ERROR_404: '/error404',
};

export const Routes: FC = () => {
  return (
    <>
      <Switch>
        <Route path={PATH.MAIN} exact render={() => <h1>Main</h1>} />
        <Route path={PATH.EMPLOYEES} render={() => <EmployeesPage />} />
        <Route path={PATH.ERROR_404} render={() => <Error404Page />} />

        <Redirect from="*" to={PATH.ERROR_404} />
      </Switch>
    </>
  );
};
