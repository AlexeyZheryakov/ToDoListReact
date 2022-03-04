import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import ToDoListPage from '../pages/ToDoList';
import { Urls } from './config';

const СonfiguredRoutes = () => {
  return (
    <Routes>
      <Route path={Urls.main} element={<Main />} />
      <Route path={Urls.toDoList} element={<ToDoListPage />} />
    </Routes>
  );
};

export default СonfiguredRoutes;
