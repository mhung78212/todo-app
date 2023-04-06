import { createAction, createReducer } from "@reduxjs/toolkit";

const initalState = {
    list: [
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
    ],
    editTodoItem: [],
    status: 'All'
};
export const addTodo = createAction("todoList/addTodo");
export const deleteTodo = createAction("todoList/deleteTodo");
export const editTodo = createAction("todoList/editTodo");
export const updateTodo = createAction("todoList/updateTodo");
export const completedTodo = createAction("todoList/completedTodo");

export const canelEditTodo = createAction("todoList/canelEditTodo");

export const filteredTodo = createAction("todoList/filteredTodo");


const todoListReducer = createReducer(initalState, (builder) => {
    builder
        .addCase(addTodo, (state, action) => {
            const todo = action.payload;
            state.list.push(todo);
        })
        .addCase(deleteTodo, (state, action) => {
            const todoDelItem = state.list.map(
                (item) => item.id === action.payload,
            );
            if (todoDelItem) {
                state.list.splice(todoDelItem, 1);
            }
        })
        .addCase(editTodo, (state, action) => {
            const currentTodoEdit =
                state.list.find((item) => item.id === action.payload) || null;
            state.editTodoItem = currentTodoEdit;
        })
        .addCase(canelEditTodo, (state) => {
            state.editTodoItem = null;
        })
        .addCase(updateTodo, (state, action) => {
            // const todoId = action.payload.id
            const todoId = state.editTodoItem.id;

            state.list.some((item) => {
                if (item.id === todoId) {
                    item.title = action.payload.title;
                    item.description = action.payload.description;
                    return true;
                }
                return false;
            });

            state.editTodoItem = null;
        })
        .addCase(completedTodo, (state, action) => {
            state.list.some((item) => {
                if (item.id === action.payload) {
                    item.completed = true;
                    return true;
                }
                return false;
            });
        }).addCase(filteredTodo,(state,action)=>{
            state.status = action.payload
        })
});
export default todoListReducer;
