import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import s from './AddEmployeeForm.module.scss';
import { validate } from '../../utils/validator';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { addEmployeeAsync } from '../../store/employeesReducer';

export const AddEmployeeForm: FC = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate(value)) {
      dispatch(addEmployeeAsync(value));
      setValue('');
    } else {
      setError(validate(value));
    }
  };

  const changeHandler = (text: string) => {
    setError(validate(text));
    setValue(text);
  };

  return (
    <div>
      <form className={s.form} onSubmit={submitHandler} noValidate>
        <Input
          placeholder="Enter name"
          name="firstName"
          onChangeText={changeHandler}
          value={value}
          error={error}
        />

        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};
