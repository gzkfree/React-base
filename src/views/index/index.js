import React, { Component } from "react";
import { render } from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";

import ContainerMain from "../../components/containerMain/index";
import "./index.less";
const { Header, Content, Footer, Sider } = Layout;
import Aside from "./components/Aside";
class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Aside></Aside>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <ContainerMain></ContainerMain>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <SiderDemo></SiderDemo>
      </div>
    );
  }
}
