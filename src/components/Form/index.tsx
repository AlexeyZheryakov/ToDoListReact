import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addToDo, editToDo } from '../../store/toDos/slice';
import MyButton from '../Button';
import { toDoCreator } from '../utils';
import styles from './styles.module.scss';

interface IProps {
  value: string;
}

const AddForm: FC<IProps> = () => {
  const { form: formStyle, input: inputStyle } = styles;
  const {
    todoStore: { currentTodo },
  } = useAppSelector((state) => state);
  const buttonText = currentTodo ? 'Save' : 'Add';
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const hadleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentTodo) {
      dispatch(editToDo({ ...currentTodo, title: value }));
    } else {
      dispatch(addToDo(toDoCreator(value)));
    }
    setValue('');
  };

  useEffect(() => {
    if (currentTodo) {
      setValue(currentTodo?.title);
    }
  }, [currentTodo]);

  return (
    <form onSubmit={hadleSubmit} className={formStyle}>
      <input autoFocus value={value} onChange={handleChange} className={inputStyle} placeholder="Text" type="text" />
      <MyButton type="submit" text={buttonText} />
    </form>
  );
};

export default AddForm;
