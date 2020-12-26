import {
  ApartmentOutlined,
  CheckSquareOutlined,
  ControlOutlined,
  DesktopOutlined,
  FireOutlined,
  FolderOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  WindowsOutlined
} from '@ant-design/icons';
import { FC, lazy, ReactElement } from 'react';

interface routesConfig {
  path: string;
  text?: string;
  icon?: ReactElement;
  Component: FC;
}

const routes: routesConfig[] = [
  {
    path: '/basic/',
    text: '首页',
    icon: <DesktopOutlined />,
    Component: lazy(() => import('./views/index'))
  },
  {
    path: '/basic/sass',
    text: 'Sass企业',
    icon: <ControlOutlined />,
    Component: lazy(() => import('./views/sass'))
  },
  {
    path: '/basic/group',
    text: '组织架构',
    icon: <ApartmentOutlined />,
    Component: lazy(() => import('./views/group'))
  },
  {
    path: '/basic/staff',
    text: '员工',
    icon: <UsergroupAddOutlined />,
    Component: lazy(() => import('./views/staff'))
  },
  {
    path: '/basic/account',
    text: '账户',
    icon: <UserOutlined />,
    Component: lazy(() => import('./views/account'))
  },
  {
    path: '/basic/settings',
    text: '公司设置',
    icon: <WindowsOutlined />,
    Component: lazy(() => import('./views/settings'))
  },
  {
    path: '/basic/salary',
    text: '工资',
    icon: <MoneyCollectOutlined />,
    Component: lazy(() => import('./views/salary'))
  },
  {
    path: '/basic/social-security',
    text: '社保',
    icon: <FundOutlined />,
    Component: lazy(() => import('./views/social-security'))
  },
  {
    path: '/basic/check',
    text: '考勤',
    icon: <CheckSquareOutlined />,
    Component: lazy(() => import('./views/check'))
  },
  {
    path: '/basic/invite',
    text: '招聘',
    icon: <FireOutlined />,
    Component: lazy(() => import('./views/invite'))
  },
  {
    path: '/basic/approval',
    text: '审批',
    icon: <FolderOutlined />,
    Component: lazy(() => import('./views/approval'))
  }
];

export default routes;
