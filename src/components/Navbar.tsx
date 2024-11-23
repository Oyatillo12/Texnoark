import React from 'react';
import { AppstoreOutlined, DatabaseOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: <NavLink to={'/'}>Dashboard</NavLink>,
    icon: <AppstoreOutlined />,
  },
  {
    key: 'sub2',
    label: <NavLink to={'/categories'}>Categories</NavLink>,
    icon: <DatabaseOutlined />,
  }
];

const Navbar: React.FC = () => {

  return (
    <Menu
      className='!w-[20%]'
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="vertical"
      items={items}
    />
  );
};

export default Navbar;