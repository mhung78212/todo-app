import React from "react";
import TodoList from "./components/TodoList";
import { Typography } from "antd";
import styled from "styled-components";
import ControlItem from "./components/ControlItem";
const { Title } = Typography;

const ContainerStyled = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
`;
const WrapperStyled = styled.div`
    margin: 0 auto;
    max-width: 900px;
    width: 100%;
`;
const TitleStyled = styled(Title)`
    text-align: center;
    margin-top: 0.5rem;
    text-transform: uppercase;
`;

function App() {
    return (
        <ContainerStyled>
            <TitleStyled>todo app</TitleStyled>
            <WrapperStyled>
                <ControlItem />
                <TodoList />
            </WrapperStyled>
        </ContainerStyled>
        
    );
}

export default App;
