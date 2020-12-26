import { Breadcrumb } from 'antd';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface BreadNavProp {
  text: string;
}

export const BreadNav: FC<BreadNavProp> = props => {
  return (
    <div style={{ margin: '10px 0' }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={'/basic'} style={{ color: '#1890ff' }}>
            首页
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{props.text}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
