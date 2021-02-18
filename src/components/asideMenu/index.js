import React, { Component, Fragment } from "react";
import { Menu } from "antd";
const { SubMenu } = Menu;
import Router from "../../common/router";
import { Link, withRouter } from "react-router-dom";
import { TeamOutlined } from "@ant-design/icons";

class AsideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: ["/index/movie/list"],
      openKeys: ["/index/movie"],
    };
  }
  // 生命周期
  componentDidMount() {
    const pathname = this.props.location.pathname;
    const menuKey = pathname.split("/").slice(0, 3).join("/");
    const menuHih = {
      selectedKeys: pathname,
      openKeys: menuKey,
    };
    this.selectMenuHigh(menuHih);
  }
  // 选择菜单
  selectMenu = ({ item, key, keyPath, domEvent }) => {
    const menuHigh = {
      selectedKeys: key,
      openKeys: keyPath[keyPath.length - 1],
    };
    this.selectMenuHigh(menuHigh);
  };
  openMenu = (openKeys) => {
    console.log(openKeys);
    this.setState({
      openKeys: [openKeys[openKeys.length - 1]],
    });
  };
  // 菜单高光
  selectMenuHigh = (params) => {
    this.setState({
      selectedKeys: [params.selectedKeys],
      openKeys: [params.openKeys],
    });
  };
  // 无级菜单处理
  renderMenu({ path, title }) {
    return (
      <Menu.Item key={path}>
        <Link to={path}>{title}</Link>
      </Menu.Item>
    );
  }
  // 子级菜单处理
  renderSubMenu({ title, path, children }) {
    return (
      <SubMenu key={path} icon={<TeamOutlined />} title={title}>
        {children &&
          children.map((item) => {
            return item.children && item.children.length > 0
              ? this.renderSubMenu(item)
              : this.renderMenu(item);
          })}
      </SubMenu>
    );
  }
  render() {
    const { selectedKeys, openKeys } = this.state;
    return (
      <Fragment>
        <Menu
          theme="dark"
          selectedKeys={selectedKeys}
          onOpenChange={this.openMenu}
          openKeys={openKeys}
          mode="inline"
          onClick={this.selectMenu}
        >
          {Router &&
            Router.map((firstItem) => {
              return firstItem.children && firstItem.children.length > 0
                ? this.renderSubMenu(firstItem)
                : this.renderMenu(firstItem);
            })}
        </Menu>
      </Fragment>
    );
  }
}
export default withRouter(AsideMenu);
