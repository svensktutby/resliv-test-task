import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import s from './App.module.scss';
import { store } from '../store/store';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Routes } from './Routes';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className={s.app}>
          <Header />

          <Main>
            <Routes />
          </Main>
        </div>
      </Router>
    </Provider>
  );
};
