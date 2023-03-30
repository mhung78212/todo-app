import { Button, Select } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import AddTodoModal from "../Modals/AddTodoModal";

const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const ControlItem = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <ContainerStyled>
            <Button type="primary" size="large" onClick={() => setIsOpen(true)}>
                Add Task
            </Button>
            <AddTodoModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <Select defaultValue="All" size="large" style={{ width: 150 }}>
                <Select.Option value="All" label="All"></Select.Option>
                <Select.Option
                    value="Incomplete"
                    label="Incomplete"
                ></Select.Option>
                <Select.Option
                    value="Complete"
                    label="Complete"
                ></Select.Option>
            </Select>
        </ContainerStyled>
    );
};

export default ControlItem;
