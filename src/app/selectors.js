import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList.list;
export const filterStatusSelector = (state) => state.todoList.filteredStatus;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    (todoList, filteredStatus) => {
        return todoList.filter((todo) => {
            if (filteredStatus === "All") {
                return todo;
            }
            return filteredStatus === "Complete" ? todo.completed : !todo.completed;
        });
    },
);
