import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addToDo, editToDo, removeCurrentTodo } from '../../store/toDos/slice';
import MyButton from '../Button';
import styles from './styles.module.scss';

interface IProps {
  value: string;
}

const AddForm: FC<IProps> = () => {
  const {
    todoStore: { currentTodo },
  } = useAppSelector((state) => state);
  const buttonText = currentTodo ? 'Save' : 'Add';
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const toDoCreator = () => ({
    id: new Date().getTime(),
    title: value,
    completed: false,
    userId: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const hadleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentTodo) {
      dispatch(editToDo({ ...currentTodo, title: value }));
      dispatch(removeCurrentTodo());
    } else {
      dispatch(addToDo(toDoCreator()));
    }
    setValue('');
  };

  useEffect(() => {
    if (currentTodo) {
      setValue(currentTodo?.title);
    }
  }, [currentTodo]);

  return (
    <form onSubmit={hadleSubmit} className={styles.form}>
      <input autoFocus value={value} onChange={handleChange} className={styles.input} placeholder="Text" type="text" />
      <MyButton type="submit" text={buttonText} />
    </form>
  );
};

export default AddForm;
