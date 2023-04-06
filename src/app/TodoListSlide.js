import { createSlice } from "@reduxjs/toolkit";


const initialState = {
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
    status: "All",
};

const TodoSlide = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = action.payload;
            state.list.push(todo);
        },
        deleteTodo: (state, action) => {
            const todoDelItem = state.list.map(
                (item) => item.id === action.payload,
            );
            if (todoDelItem) {
                state.list.splice(todoDelItem, 1);
            }
        },
        editTodo: (state, action) => {
            const currentTodoEdit =
                state.list.find((item) => item.id === action.payload) || null;
            state.editTodoItem = currentTodoEdit;
        },
        canelEditTodo: (state) => {
            state.editTodoItem = null;
        },
        updateTodo: (state, action) => {
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
        },
        completedTodo: (state, action) => {
            state.list.some((item) => {
                if (item.id === action.payload) {
                    item.completed = true;
                    return true;
                }
                return false;
            });
        },
        filteredTodo: (state, action) => {
            state.status = action.payload;
        },
    },
});
export const {
    addTodo,
    canelEditTodo,
    completedTodo,
    deleteTodo,
    editTodo,
    filteredTodo,
    updateTodo,
} = TodoSlide.actions;
const TodoReducer = TodoSlide.reducer
export default TodoReducer;
