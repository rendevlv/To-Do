import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITodo } from '../../interfaces';

interface TodoState {
  todos: ITodo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Omit<ITodo, 'id'>>) => {
      const newTodo: ITodo = {
        id: state.todos.length,     
        title: payload.title,
        text: payload.text,
        isCompleted: false,
      };
      state.todos.push(newTodo);
    },

    editTodo: (state, { payload }: PayloadAction<ITodo>) => {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos[index].title = payload.title;
      state.todos[index].text = payload.text? payload.text :  "";
    },

    removeTodo: (state, { payload }: PayloadAction<number>) => {
      const remainingTodos = state.todos.filter((todo) => todo.id !== payload);
      state.todos = remainingTodos;
    },

    toggleTodo: (state, { payload }: PayloadAction<number>) => {
      const index = state.todos.findIndex((todo) => todo.id === payload);
      state.todos[index].isCompleted = !state.todos[index].isCompleted;
    },
  },
});

export const { addTodo, editTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
