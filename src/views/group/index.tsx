import { Table, Tag, Space } from 'antd';
import { BreadNav } from '../../components/BreadNav';
import './index.scss';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <span>{text}</span>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: string, record: dataType) => (
      <Space size='middle'>
        <span>Invite {record.name}</span>
        <span>Delete</span>
      </Space>
    )
  }
];

type dataType = {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  p?: string;
};

const Group = () => {
  const data: dataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ];
  return (
    <section className='group-container'>
      <BreadNav text={'组织架构'} />
      <Table columns={columns} dataSource={data} className='table' />
    </section>
  );
};
export default Group;
