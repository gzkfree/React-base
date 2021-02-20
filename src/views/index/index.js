import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import ContainerMain from "../../components/containerMain/index";
import MyBreadcrumb from "./components/Breadcrumb";
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
          <Content
            className="container"
            style={{ margin: "0 16px", height: "500px", overflowY: "auto" }}
          >
            <MyBreadcrumb></MyBreadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <ContainerMain></ContainerMain>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            reactPcDemo ©2018 Created by Ahken
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
