import React, { FC, Suspense, useState } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import './index.scss';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UploadOutlined,
  DesktopOutlined,
  ControlOutlined
} from '@ant-design/icons';
import { MenuDown } from './components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { routes } from '../../router';
import { Loading } from '../../components/Loading';
import { Content } from 'antd/lib/layout/layout';
const { Header, Sider } = Layout;

const BasicLayout: FC = () => {
  const [coll, setColl] = useState<boolean>(false);
  if (!window.sessionStorage.getItem('token')) {
    return <Redirect to='/login' />;
  }
  return (
    <Layout className='basic-layout'>
      <Header className='site-header' style={{ paddingLeft: 0 }}>
        <div className='logo'>
          <Link key={'/basic'} to='/basic'>
            <img
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
              alt=''
              height='40'
            />
          </Link>
          <span>人力资源管理系统</span>
        </div>
        <div>
          <Dropdown overlay={MenuDown}>
            <Avatar
              className='avater'
              size='large'
              src='https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png'
            />
          </Dropdown>
          <span>你好!mcc</span>
        </div>
      </Header>

      <Layout>
        <Sider
          style={{
            position: 'relative',
            backgroundColor: '#fff'
          }}
          trigger={null}
          collapsible
          collapsed={coll}>
          <div className={coll ? 'collos out' : 'collos'}>
            {React.createElement(coll ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setColl(!coll)
            })}
          </div>
          <Menu mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1' icon={<DesktopOutlined />}>
              <Link key={'/basic'} to='/basic'>
                首页
              </Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<ControlOutlined />}>
              <Link key={'/basic/sass'} to='/basic/sass'>
                Sass
              </Link>
            </Menu.Item>
            <Menu.Item key='3' icon={<UploadOutlined />}>
              <Link key={'/basic/group'} to='/basic/group'>
                组织架构
              </Link>
            </Menu.Item>
            <Menu.Item key='4' icon={<UserOutlined />}>
              <Link key={'/basic/staff'} to='/basic/staff'>
                员工
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className='content'>
          <TransitionGroup appear>
            <Suspense fallback={<Loading />}>
              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames='page'
                      unmountOnExit>
                      <div className='page'>
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}
            </Suspense>
          </TransitionGroup>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
