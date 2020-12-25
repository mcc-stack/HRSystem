import { FC } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';
import { useLogin } from './useLogin';
const Login: FC = () => {
  const { initialValues, onFinish } = useLogin();
  return (
    <div className='login-layout'>
      <div className='form'>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={initialValues}
          onFinish={onFinish}>
          <Form.Item
            name='mobile'
            rules={[
              { required: true, message: 'Please input your Username!' }
            ]}>
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Username'
              autoComplete='on'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              { required: true, message: 'Please input your Password!' }
            ]}>
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
              autoComplete='on'
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
