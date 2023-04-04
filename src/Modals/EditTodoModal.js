import { Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { canelEditTodo, updateTodo } from "./TodoListReducer";

const EditTodoModal = ({ isOpenEditModal, setIsOpenEditModal }) => {
    const editTodo = useSelector((state) => state.todoList.editTodoItem);
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue(editTodo);
    }, [editTodo, form]);
    const dispatch = useDispatch();
    const handleCancel = () => {
        dispatch(canelEditTodo());
        form.resetFields();
        setIsOpenEditModal(false);
    };
    const handleUpdateButtonClick = () => {
        // console.log(editTodo);
        // console.log(form.getFieldsValue());
        dispatch(updateTodo(form.getFieldsValue()));
        form.resetFields();
        setIsOpenEditModal(false);
    };

    return (
        <>
            <Modal
                title="Edit Task"
                open={isOpenEditModal}
                onOk={handleUpdateButtonClick}
                onCancel={handleCancel}
                closable={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Title"
                        name="title"
                        rules={[{ required: true, message: "Missing title" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Description" name="description">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default EditTodoModal;
