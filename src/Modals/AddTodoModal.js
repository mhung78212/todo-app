import { Form, Input, Modal } from "antd";
import React from "react";

const AddTodoModal = ({ isOpen, setIsOpen }) => {
    const [form] = Form.useForm();
    const handleCancel = () => {
        form.resetFields();
        setIsOpen(false);
    };
    const handleOk = () => {
        form.resetFields();
        setIsOpen(false);
    };
    return (
        <>
            <Modal
                title="Add Task"
                open={isOpen}
                onOk={handleOk}
                onCancel={handleCancel}
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

export default AddTodoModal;
