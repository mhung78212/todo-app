import { Col, Row } from "antd";
import React from "react";
import {  useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { todosRemainingSelector } from "../app/selectors";

const ContainerStyled = styled.div`
    background-color: #ecedf6;
    padding: 1.5rem 2rem;
    border-radius: 12px;
`;

const TodoList = () => {

    const todos = useSelector(todosRemainingSelector);
    // const dispatch = useDispatch();
    // const handleDelete = (todoId) => {
    //     dispatch(deleteTodo(todoId));
    // };

    return (
        <ContainerStyled>
            <Row style={{ rowGap: "20px" }}>
                {todos.map((todo) => (
                    <Col span={8} key={todo.id}>
                        <TodoItem todo={todo} />
                        {/* <TodoItem todo={todo} handleDelete={handleDelete}/> */}
                    </Col>
                ))}
            </Row>
        </ContainerStyled>
    );
};

export default TodoList;
