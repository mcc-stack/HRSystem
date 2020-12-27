import { Menu } from 'antd';
import { useState } from 'react';
import { BreadNav } from '../../components/BreadNav';

const Settings = () => {
  const [state, setState] = useState('0');
  return (
    <section>
      <BreadNav text={'公司设置'} />
      <Menu
        mode='horizontal'
        selectedKeys={[state]}
        onClick={e => {
          setState(e.key as string);
        }}>
        <Menu.Item key={'0'}>角色管理</Menu.Item>
        <Menu.Item key={'1'}>公司信息</Menu.Item>
      </Menu>
    </section>
  );
};

export default Settings;
