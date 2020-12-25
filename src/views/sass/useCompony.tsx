import { useEffect, useState } from 'react';
import request from '../../api/request';
import Status from './components/Switch';
interface EInfo {
  key: string;
  name: string;
  version: string;
  companyPhone: string;
  expirationDate: string;
  status: number;
  address: string;
}

const columns = [
  {
    title: '公司名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '版本',
    dataIndex: 'version',
    key: 'version'
  },
  {
    title: '公司电话',
    dataIndex: 'companyPhone',
    key: 'companyPhone'
  },
  {
    title: '过期时间',
    dataIndex: 'expirationDate',
    key: 'expirationDate'
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (state: number) => <Status state={state} />
  },
  {
    title: '公司地址',
    dataIndex: 'address',
    key: 'address'
  }
];
export function useCompony() {
  const [companyData, setComponyData] = useState<EInfo[]>();
  async function getInfo() {
    const res = await request.get('/company');
    console.log(res);
    res.status === 200 && setComponyData(res.data);
  }
  useEffect(() => {
    getInfo();
  }, []);
  return { companyData, columns };
}
