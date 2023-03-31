import { Form, Input, Modal } from "antd";
import React from "react";


const EditTodoModal = ({ isOpenEditModal, setIsOpenEditModal }) => {
    const [form] = Form.useForm();
    const handleCancel = () => {
        form.resetFields();
        setIsOpenEditModal(false);
    };
    const handleEditButtonClick = () => {
        form.resetFields();
        setIsOpenEditModal(false);
    };
    return (
        <>
            <Modal
                title="Edit Task"
                open={isOpenEditModal}
                onOk={handleEditButtonClick}
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

export default EditTodoModal;
