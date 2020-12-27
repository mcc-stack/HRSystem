import React from 'react';
import { Form, Input, InputNumber, Modal } from 'antd';
import useResetFormOnCloseModal from './useResetFormOnCloseModal';

interface ModalFormProps {
  visible: boolean;
  title: string;
  onSubmit: () => void;
  onCancel: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({
  visible,
  onCancel,
  title,
  children
}) => {
  const [form] = Form.useForm();

  useResetFormOnCloseModal({
    form,
    visible
  });

  const onOk = () => {
    console.log(form);
    form.validateFields();
    console.log(form.getFieldsValue());
  };

  return (
    <Modal title={title} visible={visible} onOk={() => {}} onCancel={onCancel}>
      <Form form={form} layout='vertical' name='userForm'>
        <Form.Item name='name' label='User Name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='age' label='User Age' rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
        {/* {children} */}
      </Form>
    </Modal>
  );
};

export default ModalForm;
