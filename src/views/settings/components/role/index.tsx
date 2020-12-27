import { FC } from 'react';
import { Button, Input, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';

interface staffDataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<staffDataType> = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left'
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left'
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 140,
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size='small' shape='round'>
          编辑
        </Button>
        <Button size='small' shape='round' danger>
          删除
        </Button>
      </div>
    )
  }
];

const data: staffDataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: `${i}`,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  });
}

const Staff: FC = () => {
  return (
    <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 500 }} />
  );
};

export default Staff;
