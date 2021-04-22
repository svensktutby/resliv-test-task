import React, { FC } from 'react';

import s from './EmployeesPage.module.scss';
import { EmployeesList } from '../../components/EmployeesList';
import { AddEmployeeForm } from '../../components/AddEmployeeForm';

export const EmployeesPage: FC = () => {
  return (
    <div className={s.page}>
      <h1>Employees</h1>

      <EmployeesList />

      <AddEmployeeForm />
    </div>
  );
};
