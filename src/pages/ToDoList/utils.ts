import { PAGE_LIMIT } from './config';
import { IToDo } from '../../api/types';

export const getTodosByPage = (todos: Array<IToDo>, pageNumber: number) =>
  [...todos].splice((pageNumber - 1) * PAGE_LIMIT, PAGE_LIMIT);
