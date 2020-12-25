import { Menu, message } from 'antd';
import { FC } from 'react';
import { Switch, useLocation, Route, Redirect } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
export const Routes: FC = () => {
  const location = useLocation();
  if (!window.sessionStorage.getItem('token')) {
    return <Redirect to='/login' />;
  }
  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition
        key={location.key}
        classNames='fade'
        addEndListener={(node, done) => {
          console.log(done);
          node.addEventListener('transitionend', done, false);
        }}
        timeout={300}>
        <Switch location={location}>
          <Route
            path='/basic'
            key='/basic'
            exact
            render={() => (
              <section>
                <div className='content'>首页</div>
              </section>
            )}
          />
          <Route
            path='/basic/sass'
            key='/basic/sass'
            exact
            render={() => (
              <section>
                <div className='content'>sass</div>
              </section>
            )}
          />
          <Route
            path='/basic/group'
            key='/basic/group'
            exact
            render={() => (
              <section>
                <div className='content'>组织架构</div>
              </section>
            )}
          />
        </Switch>
      </CSSTransition>
    </SwitchTransition>
  );
};

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
