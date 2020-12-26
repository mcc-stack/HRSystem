import { Menu, message } from 'antd';

export function MenuDown() {
  return (
    <Menu>
      <Menu.Item>
        <span>个人信息</span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={e => {
            window.sessionStorage.removeItem('token');
            window.history.replaceState('', '', '/login');
            window.location.reload();
            message.success('退出成功!');
          }}>
          退出登录
        </span>
      </Menu.Item>
    </Menu>
  );
}
