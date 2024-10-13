import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const findId = action.payload.id;
      const newData = action.payload.text;
      const find = state.todos.find((item) => item.id === findId);

      if (find) {
        find.text = newData;
      }
    },
  },
});

export const {addToDo, removeToDo} = toDoSlice.actions;

export default toDoSlice.reducer;
