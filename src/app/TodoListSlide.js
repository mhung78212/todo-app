import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let todos = localStorage.getItem("todos");
    if (todos) {
        return JSON.parse(localStorage.getItem("todos"));
    } else {
        return [];
    }
};
const storeInLocalStorage = (data) => {
    localStorage.setItem("todos", JSON.stringify(data));
};
const initialState = {
    list: fetchFromLocalStorage(),
    editTodoItem: [],
    filteredStatus: "All",
    todoListStatus: "idle",
};
const TodoSlide = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = action.payload;
            state.list.push(todo);
            storeInLocalStorage(state.list);
        },
        deleteTodo: (state, action) => {
            const todoDelItem = state.list.map(
                (item) => item.id === action.payload,
            );
            if (todoDelItem) {
                state.list.splice(todoDelItem, 1);
            }
            storeInLocalStorage(state.list);
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
            storeInLocalStorage(state.list);

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
            storeInLocalStorage(state.list);
        },
        filteredTodo: (state, action) => {
            state.filteredStatus = action.payload;
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
const TodoReducer = TodoSlide.reducer;
export default TodoReducer;
