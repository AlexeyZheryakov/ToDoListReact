import ApiClient from './ApiClient';
import { IToDo } from './types';

const api = {
  getToDos: () => ApiClient.get<IToDo[]>('/todos'),
  getTodoById: (id: number) => ApiClient.get<IToDo>(`/todos/${id}`),
  addToDo: (todo: IToDo) => ApiClient.post<IToDo>('/todos', JSON.stringify(todo)),
};

export default api;

// Хотел сделать добавление заметок и редактирование через бэкенд,
// но если я правильно понял, на jsonplaceholder в разделе todos отсутствует такая возможность,
// бэкенд принимает пост запрос, приходит ответ, что тудушка была создана,
// однако получить обновлённый список у меня не вышло. Оставляю этот код для демонстрации.
