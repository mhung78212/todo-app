import { Form, Input, Modal } from "antd";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../app/TodoListSlide";
import { HANDLENAME, toastSuccess } from "../utils/helper";

const AddTodoModal = ({ isOpen, setIsOpen }) => {
    const [form] = Form.useForm();
    const handleCancel = () => {
        form.resetFields();
        setIsOpen(false);
    };
    const dispatch = useDispatch();
    const handleAddButtonClick = () => {
        dispatch(
            addTodo({
                id: uuidv4(),
                title: form.getFieldsValue().title,
                description: form.getFieldsValue().description,
                completed: false,
            }),
        );
        form.resetFields();
        setIsOpen(false);

        toastSuccess(HANDLENAME.ADD)
    };
    return (
        <>
            <Modal
                title="Add Task"
                open={isOpen}
                onOk={handleAddButtonClick}
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
