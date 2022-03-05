import React, { FC, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addToDo, editToDo } from '../../store/toDos/slice';
import MyButton from '../Button';
import { toDoCreator } from '../utils';
import styles from './styles.module.scss';

interface IProps {
  value: string;
}

const AddForm: FC<IProps> = () => {
  const { form: formStyle, input: inputStyle, actions: actionsStyle } = styles;
  const {
    todoStore: { currentTodo },
  } = useAppSelector((state) => state);
  const buttonText = currentTodo ? 'Save' : 'Add';
  const [value, setValue] = useState('');
  const [placeholder, setPlaceholder] = useState('Text');
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const hadleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      if (currentTodo) {
        dispatch(editToDo({ ...currentTodo, title: value }));
      } else {
        dispatch(addToDo(toDoCreator(value)));
      }
      setValue('');
      setPlaceholder('Text');
    } else {
      setPlaceholder('Enter text, the field cannot be empty!');
    }
  };

  useEffect(() => {
    if (currentTodo) {
      setValue(currentTodo?.title);
    }
  }, [currentTodo]);

  return (
    <form onSubmit={hadleSubmit} className={formStyle}>
      <input
        autoFocus
        value={value}
        onChange={handleChange}
        className={inputStyle}
        placeholder={placeholder}
        type="text"
      />
      <div className={actionsStyle}>
        <MyButton type="submit" text={buttonText} />
      </div>
    </form>
  );
};

export default AddForm;
