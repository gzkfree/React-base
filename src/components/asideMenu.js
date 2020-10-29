import React, { Component } from "react";
import { Menu } from 'antd';
const { SubMenu } = Menu;
import routeData from '../common/router'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
export default class AsideMenu extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
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
        )
    }
}