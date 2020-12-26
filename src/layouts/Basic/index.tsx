import React, { FC, Suspense, useState } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import './index.scss';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { MenuDown } from './components/menu-down';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import routes from '../../router.tsx';
import { Loading } from '../../components/Loading';
import { Content } from 'antd/lib/layout/layout';
// import { NotFound } from '../../views/not-found';
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
          <Menu mode='inline' defaultSelectedKeys={['/basic/']}>
            {routes.map(({ path, icon, text }) => (
              <Menu.Item key={path} icon={icon}>
                <Link to={path}>{text}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Content className='content'>
          <TransitionGroup appear>
            <Suspense fallback={<Loading />}>
              {routes.map(({ path, Component }) => {
                console.log('path', path);
                return (
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
                );
              })}
            </Suspense>
          </TransitionGroup>
          {/* <Route exact path={'/basic/404'} children={<NotFound />} />
          <Redirect to='/basic/404' /> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
