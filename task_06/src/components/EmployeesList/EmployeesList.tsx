import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import s from './EmployeesList.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UserType } from '../../api';
import {
  deleteEmployeeAsync,
  fetchEmployeesAsync,
} from '../../store/employeesReducer';
import { Button } from '../common/Button';
import { SvgIcon } from '../common/SvgIcon';

export const EmployeesList: FC = () => {
  const employees = useTypedSelector<Array<UserType>>(
    (state) => state.employees.users,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployeesAsync());
  }, [dispatch]);

  const clickHandler = (id: number) => {
    dispatch(deleteEmployeeAsync(id));
  };

  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {employees.map(({ id, first_name }) => (
          <li key={id} className={s.item}>
            <span className={s.employeeName}>{first_name}</span>
            <Button
              className={s.btnDelete}
              onClick={() => {
                clickHandler(id);
              }}
            >
              <SvgIcon type="trashbin" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
