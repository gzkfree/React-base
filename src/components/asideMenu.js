import React, { Component } from "react";
import { Menu } from 'antd';
const { SubMenu } = Menu;
import Router from '../common/router'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
export default class AsideMenu extends Component {
  constructor(props) {
    super(props)
  }
  // 无级菜单
  // <Menu.Item key={v.component}>
  //     控制台
  // </Menu.Item>
  // 子级菜单
  // <SubMenu>
  //   <Menu.Item key={v2.component}>{v2.name}</Menu.Item>
  // </SubMenu>

  // 无级菜单处理
  renderMenu({ path, title }) {
    return <Menu.Item key={path}>{title}</Menu.Item>
  }
  // 子级菜单处理
  renderSubMenu({ title, path, children }) {
    return (
      <SubMenu key={path} icon={<UserOutlined />} title={title}>
        {
          children && children.map(item => {
            return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item)
          })
        }
      </SubMenu>
    )
  }
  render() {
    return (
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {
          Router && Router.map(firstItem => {
            return firstItem.children && firstItem.children.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
          })
        }

      </Menu>
    )
  }
}