import { createAction, createReducer } from "@reduxjs/toolkit";

const initalState = [
    {
        id: "1",
        title: "Learn React",
        description: "Learn React Description",
        completed: true,
    },
    {
        id: "2",
        title: "Learn Redux",
        description: "Learn Redux Description",
        completed: false,
    },
];
export const addTodo = createAction("todoList/addTodo");
export const deleteTodo = createAction("todoList/deleteTodo");
export const editTodo = createAction("todoList/editTodo");

const todoListReducer = createReducer(initalState, (builder) => {
    builder
        .addCase(addTodo, (state, action) => {
            const todo = action.payload;
            state.push(todo);
        })
        .addCase(deleteTodo, (state, action) => {
            const todoDelItem = state.map((item) => item.id === action.payload);
            if (todoDelItem) {
                state.splice(todoDelItem, 1);
            }
        });
});
export default todoListReducer;
