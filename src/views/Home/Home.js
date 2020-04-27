import React, { Component } from "react";
import { render } from "react-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import routeData from '../../common/router'
import './Home.css'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {
              routeData.map((v, index) => {
                return v.children ?
                  <SubMenu
                    key={v.subMenu}
                    title={
                      <span>
                        <UserOutlined />
                        <span>{v.title}</span>
                      </span>
                    }
                  >{
                      v.children.map(((v2, index2) => {
                        return <Menu.Item key={v2.component}>{v2.name}</Menu.Item>
                      }))
                    }

                  </SubMenu> :
                  <Menu.Item key={v.component}>
                    <PieChartOutlined />
                    <span>{v.title}</span>
                  </Menu.Item>
              })
            }

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default class Home extends React.Component {
  constructor() {
    super()
  }
  render() {
    return <div><SiderDemo></SiderDemo></div>
  }
}