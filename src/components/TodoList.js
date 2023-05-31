import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
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
    if (todos.length === 0) return <div></div>;
    return (
        <ContainerStyled>
            <Row style={{ rowGap: "20px" }}>
                {todos.map((todo) => (
                    <Col span={8} key={todo.id}>
                        <TodoItem todo={todo} />
                    </Col>
                ))}
            </Row>
        </ContainerStyled>
    );
};

export default TodoList;
