import { message } from 'antd';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
export function useLogin() {
  const history = useHistory();
  const key = 'loading';
  const url = 'http://localhost:8080/login';
  const initialValues = {
    mobile: window.localStorage.getItem('mobile'),
    password: window.localStorage.getItem('password'),
    remember: true
  };
  const onFinish = async (values: any) => {
    message.loading({ content: '登录中...', key });
    const res = await Axios.post(url, {
      mobile: values.mobile,
      password: values.password
    });
    if (res.status !== 201) {
      message.error({ content: '账号密码错误!', key });
      return;
    }
    message.success({ content: '登录成功!', key }, 2000);
    if (values.remember) {
      window.localStorage.setItem('mobile', values.mobile);
      window.localStorage.setItem('password', values.password);
    }
    console.log(res.data);
    window.sessionStorage.setItem('token', res.data.mobile);
    history.push('/basic/');
  };

  return { initialValues, onFinish };
}
