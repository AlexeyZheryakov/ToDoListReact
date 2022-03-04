import ApiClient from './ApiClient';
import { IToDo, IToDoForPost } from './types';

const api = {
  getToDos: () => ApiClient.get<IToDo[]>('/todos'),
  getTodoById: (id: number) => ApiClient.get<IToDo>(`/todos/${id}`),
  addToDo: (todo: IToDoForPost) => ApiClient.post<IToDo>('/todos', JSON.stringify(todo)),
};

export default api;
