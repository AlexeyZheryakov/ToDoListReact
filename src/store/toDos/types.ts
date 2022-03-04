import { IToDo } from '../../api/types';

export interface ITodosStore {
  currentTodo: IToDo | null | undefined;
  todos: IToDo[];
  isLoading: boolean;
  error: string;
}
