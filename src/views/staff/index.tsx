import { FC } from 'react';
import { BreadNav } from '../../components/BreadNav';
import { Button, Form, Input, Modal, Table } from 'antd';
import useStaff from './useStaff';

const Staff: FC = () => {
  const {
    staffData: data,
    columns,
    height,
    search,
    loading,
    editForm,
    editVisible,
    handleEditCancel,
    handleEditOk,
    confirmLoading,
    addForm,
    showAddUserModal,
    addVisible,
    handleAddOk,
    handleAddCancel
  } = useStaff();
  return (
    <section>
      <BreadNav text={'员工管理'} />
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '10px 0'
        }}>
        <Input.Search
          placeholder='输入员工名进行搜索(可以按回车)'
          onSearch={search}
          style={{ maxWidth: 600 }}
          enterButton
        />
        <div>
          <Button
            type='primary'
            style={{ marginRight: 20 }}
            onClick={showAddUserModal}>
            新增员工
          </Button>
          <Button type='primary'>导出Excel</Button>
        </div>
      </header>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        scroll={{ x: 1500, y: height.current }}
        pagination={{
          pageSize: 6,
          showTotal: total => <span>总共{total}条</span>
        }}
      />
      {/* 新增员工对话框 */}
      <Modal
        title='增加员工'
        okText='确定'
        cancelText='取消'
        visible={addVisible}
        onOk={handleAddOk}
        confirmLoading={confirmLoading}
        onCancel={handleAddCancel}>
        <Form form={addForm}>
          <Form.Item
            name='username'
            label='员工姓名'
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='userId' label='工号' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='departmentName'
            label='部门名'
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='sex' label='性别' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='mobile' label='电话号' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='edu' label='学历' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='nationArea'
            label='区域'
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='timeOfEntry'
            label='入职时间'
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {/* 修改员工对话框 */}
      <Modal
        title='修改员工'
        okText='确定'
        cancelText='取消'
        visible={editVisible}
        onOk={handleEditOk}
        confirmLoading={confirmLoading}
        onCancel={handleEditCancel}>
        <Form form={editForm}>
          <Form.Item
            name='username'
            label='员工姓名'
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='userId' label='工号' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='departmentName'
            label='部门名'
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='sex' label='性别' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='mobile' label='电话号' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name='edu' label='学历' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='nationArea'
            label='区域'
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='timeOfEntry'
            label='入职时间'
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </section>
  );
};

export default Staff;
