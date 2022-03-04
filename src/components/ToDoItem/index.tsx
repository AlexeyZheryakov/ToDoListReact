/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { IToDo } from '../../api/types';
import { useAppDispatch } from '../../hooks/redux';
import { removeToDo, getToDo } from '../../store/toDos/slice';
import MyButton from '../Button';
import styles from './styles.module.scss';


interface IProps {
  toDoItem: IToDo
}

const ToDoItem: FC<IProps> = ({ toDoItem: {id: todoId, title, completed} }) => {
  const tirleClassName = !completed ? styles.title : styles.titleCompleted;
  const dispatch = useAppDispatch();

  const handleDeleteClick = () => {
    dispatch(removeToDo(todoId))
  }

  const handleEditClick = () => {
    dispatch(getToDo(todoId))
  }

  return (
    <li className={styles.li}>
      <span className={tirleClassName}>
        {title}
      </span>
      <div className={styles.actions}>
        <MyButton mr onClick={handleEditClick} type='button' text='edit' />
        <MyButton onClick={handleDeleteClick} type='button' text='delete' />
      </div>
    </li>
  )
}

export default ToDoItem;
