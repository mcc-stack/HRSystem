import { Modal, Button, Form, Input } from 'antd';
import { useState } from 'react';

const StaffModal = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title='Title'
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}>
        <Form>
          <Form.Item name='name' label='User Name' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='name' label='User Name' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='name' label='User Name' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='name' label='User Name' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='name' label='User Name' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default StaffModal;
