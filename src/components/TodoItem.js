import { CheckOutlined } from "@ant-design/icons";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons/lib/icons";
import React, { useState } from "react";
import styled from "styled-components";

import { Typography } from "antd";
import EditTodoModal from "../Modals/EditTodoModal";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../app/TodoListReducer";
import { completedTodo } from "../app/TodoListSlide";
import { HANDLENAME, toastSuccess } from "../utils/helper";
import Swal from "sweetalert2";

const { Title, Text } = Typography;

const ContainerStyled = styled.div`
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    margin: 0 5px;
`;
const ContentStyled = styled.div`
    padding: 10px;
`;
const IconStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin: 10px;
`;
const ButtonStyled = styled.button`
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 20px;
`;

const TodoItem = ({ todo }) => {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    const dispatch = useDispatch();
    const handleDelete = (todoId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteTodo(todoId));
                toastSuccess(HANDLENAME.DELETE)
            }
          })
    

    };
    const handleEdit = (todoId) => {
        dispatch(editTodo(todoId));
    };
    const handleCompleted = (todoId) => {
        dispatch(completedTodo(todoId));
        toastSuccess(HANDLENAME.COMPLETE)
    };
    return (
        <ContainerStyled
            style={{ backgroundColor: todo.completed ? "#00C851" : "#33b5e5" }}
        >
            <ContentStyled>
                <Title style={{ color: "white" }} level={5}>
                    {todo.title}
                </Title>
                <Text style={{ color: "white" }}>{todo.description}</Text>
            </ContentStyled>
            <IconStyled>
                {todo.completed ? (
                    <></>
                ) : (
                    <>
                        <ButtonStyled>
                            <EditOutlined
                                style={{ color: "#ffbb33" }}
                                onClick={() => {
                                    setIsOpenEditModal(true);
                                    handleEdit(todo.id);
                                }}
                                // handleEdit={handleEdit}
                            />
                        </ButtonStyled>
                        <EditTodoModal
                            isOpenEditModal={isOpenEditModal}
                            setIsOpenEditModal={setIsOpenEditModal}
                        />
                        <ButtonStyled>
                            <CheckOutlined
                                style={{ color: "#007E33" }}
                                onClick={() => handleCompleted(todo.id)}
                            />
                        </ButtonStyled>
                    </>
                )}

                <ButtonStyled>
                    <DeleteOutlined
                        style={{ color: "#ff4444" }}
                        onClick={() => handleDelete(todo.id)}
                    />
                </ButtonStyled>
            </IconStyled>
        </ContainerStyled>
    );
};

export default TodoItem;
