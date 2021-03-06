import { Button, Form, message, Popconfirm } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { useEffect, useRef, useState } from 'react';
import request from '../../api/request';
interface staffListType {
  userId: string;
  username: string;
  sex: string;
  departmentName: string;
  mobile: string;
  timeOfEntry: string;
  edu: string;
  nationArea: string;
}
export default function useStaff() {
  const [staffData, setData] = useState<staffListType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();
  const [editVisible, setEditVisible] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const height = useRef(window.innerHeight - 300);
  const columns: ColumnsType<staffListType> = [
    {
      title: '员工姓名',
      width: 50,
      dataIndex: 'username',
      key: 'username',

      fixed: 'left'
    },
    {
      title: '工号',
      width: 50,
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
      width: 50
    },
    {
      title: '部门名',
      width: 50,
      dataIndex: 'departmentName',
      key: 'departmentName'
    },
    {
      title: '电话号',
      dataIndex: 'mobile',
      key: 'mobile',
      width: 50
    },
    {
      title: '入职时间',
      dataIndex: 'timeOfEntry',
      key: 'timeOfEntry',
      width: 50
    },
    {
      title: '学历',
      dataIndex: 'edu',
      key: 'edu',
      width: 50
    },
    {
      title: '地区',
      dataIndex: 'nationArea',
      key: 'nationArea',
      width: 50
    },
    {
      title: 'Action',
      key: 'operation',
      width: 60,
      fixed: 'right',
      render: (staff: staffListType) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              onClick={() => {
                showEditUserModal(staff.userId);
              }}>
              编辑
            </Button>
            <Popconfirm
              placement='bottomRight'
              title='此操作将删除该用户,是否继续'
              okText='继续'
              cancelText='再想想'
              onConfirm={() => {
                delStaff(staff.userId);
              }}>
              <Button danger onClick={() => {}}>
                删除
              </Button>
            </Popconfirm>
          </div>
        );
      }
    }
  ];

  async function getStaff(id?: string) {
    try {
      if (id) {
        const { data } = await request.get(`/staff/${id}`);
        console.log(data);
        editForm.setFieldsValue(data);
      } else {
        const { data } = await request.get('/staff');
        data.forEach((item: any) => (item.key = item.userId));
        setData(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function search(info: string) {
    try {
      const { data } = await request.get('/staff', {
        params: info.trim() === '' ? null : { username: info.trim() }
      });
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function delStaff(userId: string) {
    try {
      const { data } = await request.delete(`/staff/${userId}`);
      if (data.code !== 403) {
        message.success('删除成功!', 3);
        getStaff();
      } else {
        message.success('你没有这个权限!', 3);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function addStaff(staffInfo: any) {
    try {
      const { data } = await request.post('/staff', staffInfo);
      if (data.code !== 403) {
        message.success('增加员工成功!', 3);
        getStaff();
      } else {
        message.success('增加员工失败,你没有这个权限!', 3);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function updateStaff(userId: string, staffInfo: any) {
    try {
      const { data } = await request.put(`/staff/${userId}`, staffInfo);
      if (data.code !== 403) {
        message.success('修改员工信息成功!', 3);
        getStaff();
      } else {
        message.success('修改员工信息失败,你没有这个权限!', 3);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function showEditUserModal(userId: string) {
    getStaff(userId);
    setEditVisible(true);
  }
  function showAddUserModal() {
    setAddVisible(true);
  }
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleEditOk = async () => {
    setConfirmLoading(true);
    try {
      await editForm.validateFields();
      const fields = editForm.getFieldsValue();
      updateStaff(fields.userId, { ...fields });
      setConfirmLoading(false);
      setEditVisible(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddOk = async () => {
    setConfirmLoading(true);
    try {
      await addForm.validateFields();
      const fields = addForm.getFieldsValue();
      addStaff({ ...fields, id: fields.userId });
      setConfirmLoading(false);
      setAddVisible(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditCancel = () => {
    setEditVisible(false);
  };
  const handleAddCancel = () => {
    setAddVisible(false);
  };
  useEffect(() => {
    getStaff();
  }, []);
  return {
    height,
    staffData,
    columns,
    search,
    delStaff,
    loading,
    editForm,
    editVisible,
    showEditUserModal,
    confirmLoading,
    handleEditOk,
    handleEditCancel,
    addForm,
    addVisible,
    showAddUserModal,
    handleAddOk,
    handleAddCancel
  };
}
