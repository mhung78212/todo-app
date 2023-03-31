import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../Modals/TodoListReducer";

export const store = configureStore({
    reducer: {
        todoList: todoListReducer,
    },
});
