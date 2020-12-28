import { useRef, useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Button } from 'antd';
import { BreadNav } from '../../components/BreadNav';

interface Item {
  key: string;
  name: string;
  age: number;
  address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  });
}
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Item;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`
            }
          ]}>
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Item) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;

      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: 50,
      editable: true
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: 50,
      editable: true
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: 100,
      editable: true
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      width: 80,
      align: 'center',
      fixed: 'right',
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Popconfirm
              title='确定修改?'
              onConfirm={() => save(record.key)}
              okText='确定修改'
              cancelText='取消'>
              <Button
                type='link'
                // onClick={() => save(record.key)}
                style={{ marginRight: 8, cursor: 'hover' }}>
                保存
              </Button>
            </Popconfirm>
            <Popconfirm
              title='确定取消?(系统不会保留你的更改)'
              onConfirm={cancel}
              okText='确定取消'
              cancelText='我再想想'>
              <Button type='link'>取消</Button>
            </Popconfirm>
          </span>
        ) : (
          <Button
            type='link'
            disabled={editingKey !== ''}
            onClick={() => edit(record)}>
            编辑
          </Button>
        );
      }
    }
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    };
  });
  const height = useRef(window.innerHeight - 300);
  console.log(mergedColumns);
  return (
    <section>
      <BreadNav text='组织架构' />
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '10px 0'
        }}>
        <Input.Search
          placeholder='输入组织名进行搜索(可以按回车)'
          onSearch={() => {}}
          style={{ maxWidth: 600 }}
          enterButton
        />
        <div>
          <Button type='primary' style={{ marginRight: 20 }} onClick={() => {}}>
            新增组织
          </Button>
        </div>
      </header>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell
            }
          }}
          bordered
          dataSource={data}
          columns={mergedColumns as any}
          scroll={{ x: 1000, y: height.current }}
          pagination={{
            onChange: cancel,
            pageSize: 10
          }}
        />
      </Form>
    </section>
  );
};

export default EditableTable;
