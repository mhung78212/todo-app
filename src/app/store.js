import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoListSlide";
// import todoListReducer from "./TodoListReducer";


export const store = configureStore({
    reducer: {
        todoList: TodoReducer,
    },
});
