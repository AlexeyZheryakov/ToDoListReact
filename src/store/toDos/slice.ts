import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IToDo } from '../../api/types';
import getToDos from './thunks';
import { ITodosStore } from './types';

const initialState: ITodosStore = {
  currentTodo: null,
  todos: [],
  isLoading: false,
  error: '',
};

export const toDosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo(state, { payload: todo }: PayloadAction<IToDo>) {
      state.todos.unshift(todo);
    },
    removeToDo(state, { payload: id }: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    getToDo(state, { payload: id }: PayloadAction<number>) {
      state.currentTodo = state.todos.find((todo) => todo.id === id);
    },
    editToDo(state, { payload: newTodo }: PayloadAction<IToDo>) {
      const index = state.todos.findIndex((todo) => todo.id === newTodo.id);
      state.todos[index] = newTodo;
      state.currentTodo = null;
    },
    removeCurrentTodo(state) {
      state.currentTodo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getToDos.fulfilled, (state, { payload: todos }) => {
        state.error = '';
        state.isLoading = false;
        state.todos = todos;
      })
      .addMatcher(
        (action) => action.type.endsWith('pending'),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        (action) => {
          return action.type.endsWith('rejected');
        },
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { getToDo, addToDo, removeToDo, removeCurrentTodo, editToDo } = toDosSlice.actions;

export default toDosSlice.reducer;
