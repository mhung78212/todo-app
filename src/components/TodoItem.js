import { CheckOutlined } from "@ant-design/icons";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import styled from "styled-components";

import { Typography } from "antd";
const { Title, Text } = Typography;
const ContainerStyled = styled.div`
    background-color: #b6b8d8;
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
const TodoItem = () => {
    return (
        <ContainerStyled>
            <ContentStyled>
                <Title level={5}>Learn Reactjs</Title>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis, numquam neque sint nulla sed reiciendis, pariatur
                    laboriosam laborum dolorum blanditiis dolores minus labore
                    repellat totam aperiam placeat. Similique, cupiditate
                    provident!
                </Text>
            </ContentStyled>
            <IconStyled>
                <ButtonStyled>
                    <EditOutlined style={{ color: "#271c6c" }} />
                </ButtonStyled>
                <ButtonStyled>
                    <CheckOutlined style={{ color: "green" }} />
                </ButtonStyled>
                <ButtonStyled>
                    <DeleteOutlined style={{ color: "red" }} />
                </ButtonStyled>
            </IconStyled>
        </ContainerStyled>
    );
};

export default TodoItem;
