import { Button, Select } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import AddTodoModal from "../Modals/AddTodoModal";
import { useDispatch } from "react-redux";
import { filteredTodo } from "../app/TodoListReducer";

const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const ControlItem = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()
    const handleFilter = (value) => {
        dispatch(filteredTodo(value))
    };
    return (
        <ContainerStyled>
            <Button type="primary" size="large" onClick={() => setIsOpen(true)}>
                Add Task
            </Button>
            <AddTodoModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <Select
                defaultValue="All"
                size="large"
                style={{ width: 150 }}
                onChange={(value)=> handleFilter(value)}
            >
                <Select.Option value="All" label="All"></Select.Option>
                <Select.Option
                    value="Incomplete"
                ></Select.Option>
                <Select.Option
                    value="Complete"
                ></Select.Option>
            </Select>
        </ContainerStyled>
    );
};

export default ControlItem;
