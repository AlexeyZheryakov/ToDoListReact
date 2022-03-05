import React, { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import ToDoItem from '../../components/ToDoItem';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import getToDos from '../../store/toDos/thunks';
import AddForm from '../../components/Form';
import Pagination from '../../components/Pagination';
import { PAGE_LIMIT } from './config';
import { getTodosByPage } from './utils';

const ToDoListPage: FC = () => {
  const {
    container: containerStyle,
    form: formStyle,
    listContainer: listContainerStyle,
    altText: altTextStyle,
    pagination: paginationStyle,
  } = styles;
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const {
    todoStore: { todos, error },
  } = useAppSelector((state) => state);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const numberOfPages = Math.ceil(todos.length / PAGE_LIMIT);

  useEffect(() => {
    dispatch(getToDos());
  }, []);

  return (
    <div className={containerStyle}>
      <div className={formStyle}>
        <AddForm value="" />
      </div>
      <div className={listContainerStyle}>
        <ul>
          {todos.length ? (
            getTodosByPage(todos, currentPage).map((todo) => <ToDoItem key={todo.id} toDoItem={todo} />)
          ) : error ? (
            <h2 className={altTextStyle}>{`Error: ${error}`}</h2>
          ) : (
            <h2 className={altTextStyle}>The list is empty</h2>
          )}
        </ul>
      </div>
      <div className={paginationStyle}>
        <Pagination onClick={handleClick} numberOfPages={numberOfPages} />
      </div>
    </div>
  );
};

export default ToDoListPage;
