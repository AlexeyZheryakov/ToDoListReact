import React, { FC } from 'react';
import { IToDo } from '../../api/types';
import { useAppDispatch } from '../../hooks/redux';
import { removeToDo, getToDo, changeCompleted } from '../../store/toDos/slice';
import MyButton from '../Button';
import Checkbox from '../Checkbox';
import styles from './styles.module.scss';

interface IProps {
  toDoItem: IToDo;
}

const ToDoItem: FC<IProps> = ({ toDoItem: { id: todoId, title, completed } }) => {
  const { li: liStyle, title: titleStyle, titleCompleted: titleCompletedStyle, actions: actionsStyle } = styles;
  const titleClassName = !completed ? titleStyle : titleCompletedStyle;
  const dispatch = useAppDispatch();

  const handleClickCheckbox = () => {
    dispatch(changeCompleted(todoId));
  };

  const handleDeleteClick = () => {
    dispatch(removeToDo(todoId));
  };

  const handleEditClick = () => {
    dispatch(getToDo(todoId));
  };

  return (
    <li className={liStyle}>
      <Checkbox onClick={handleClickCheckbox} isActive={completed} />
      <span className={titleClassName}>{title}</span>
      <div className={actionsStyle}>
        <MyButton mr onClick={handleEditClick} type="button" text="edit" />
        <MyButton onClick={handleDeleteClick} type="button" text="delete" />
      </div>
    </li>
  );
};

export default ToDoItem;
