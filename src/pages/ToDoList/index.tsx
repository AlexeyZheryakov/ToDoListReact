import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import ToDoItem from '../../components/ToDoItem';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import getToDos from '../../store/toDos/thunks';
import AddForm from '../../components/Form';
import Pagination from '../../components/Pagination';
import { IToDo } from '../../api/types';

const ToDoListPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [todosForRender, setTodosForRender] = useState<IToDo[]>([]);
  const PAGE_LIMIT = 10;
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

  useEffect(() => {
    if (todos.length) {
      setTodosForRender([...todos].splice((currentPage - 1) * PAGE_LIMIT, PAGE_LIMIT));
    }
  }, [currentPage, todos]);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <AddForm value="" />
      </div>
      <ul>
        {todos.length ? (
          todosForRender.map((todo) => <ToDoItem key={todo.id} toDoItem={todo} />)
        ) : error ? (
          <h2 className={styles.altText}>{`Error: ${error}`}</h2>
        ) : (
          <h2 className={styles.altText}>The list is empty пуст</h2>
        )}
      </ul>
      <Pagination onClick={handleClick} numberOfPages={numberOfPages} />
    </div>
  );
};

export default ToDoListPage;
