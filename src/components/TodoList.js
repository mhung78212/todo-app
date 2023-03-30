import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const ContainerStyled = styled.div`
    background-color: #ecedf6;
    padding: 1.5rem 2rem;
    border-radius: 12px;
`;
const TodoList = () => {
    return (
        <ContainerStyled>
            <Row style={{rowGap: '20px'}}>
                <Col span={8}>
                    <TodoItem />
                </Col>
                <Col span={8}>
                    <TodoItem />
                </Col>
                <Col span={8}>
                    <TodoItem />
                </Col>
            </Row>
        </ContainerStyled>
    );
};

export default TodoList;
