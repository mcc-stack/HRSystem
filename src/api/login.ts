import { message } from 'antd';
import request from './request';

interface loginProps {
  mobile: string;
  password: string;
}

export function loginReq(props: loginProps) {
  return new Promise(async (resolve, reject) => {
    message.loading('登录中...');
    const res = await request.post('/login');
  });
}
