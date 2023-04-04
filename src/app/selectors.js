import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList.list;
export const filterStatusSelector = (state) => state.todoList.status;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    (todoList, status) => {
        return todoList.filter((todo) => {
            if (status === "All") {
                return todo;
            }
            return status === "Complete" ? todo.completed : !todo.completed;
        });
    },
);
