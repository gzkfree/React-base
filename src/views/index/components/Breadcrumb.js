import React, { Component, Fragment } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { withRouter } from "react-router-dom";
import router from "../../../common/router";
class MyBreadcrumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBreadcrumb: {},
    };
  }
  // 路由扁平化
  flattenRoutes(arr) {
    return arr.reduce((prev, item) => {
      prev.push(item);
      console.log(prev);
      return prev.concat(
        Array.isArray(item.children) ? this.flattenRoutes(item.children) : item
      );
    }, []);
  }

  // 获取面包屑
  getBreadcrumbs = ({ flattenRoutes, location }) => {
    // 初始化匹配数组match
    let matches = [];

    location.pathname
      // 取得路径名，然后将路径分割成每一路由部分.
      .split("?")[0]
      .split("/")
      // 对每一部分执行一次调用`getBreadcrumb()`的reduce.
      .reduce((prev, curSection) => {
        // 将最后一个路由部分与当前部分合并，比如当路径为 `/x/xx/xxx` 时，pathSection分别检查 `/x` `/x/xx` `/x/xx/xxx` 的匹配，并分别生成面包屑
        const pathSection = `${prev}/${curSection}`;
        const breadcrumb = getBreadcrumb({
          flattenRoutes,
          curSection,
          pathSection,
        });

        // 将面包屑导入到matches数组中
        matches.push(breadcrumb);

        // 传递给下一次reduce的路径部分
        return pathSection;
      });
    return matches;
  };
  componentDidMount() {
    console.log(this.props, router);
    console.log("currentBreadcrumb", this.flattenRoutes(router));
    const pathname = this.props.location.pathname;
    const currentKey = pathname.split("/").slice(0, 3).join("/");
    console.log(currentKey);
    const currentBreadcrumb = router.find((item) => {
      return item.path === currentKey;
    });

    this.setState({
      currentBreadcrumb: currentBreadcrumb,
    });
  }

  render() {
    const { currentBreadcrumb } = this.state;
    console.log(111, currentBreadcrumb);
    return (
      <Fragment>
        <Breadcrumb style={{ margin: "16px 0" }}>
          {currentBreadcrumb.children &&
            currentBreadcrumb.children.map((item) => {
              return <Breadcrumb.Item>{item.title}</Breadcrumb.Item>;
            })}
        </Breadcrumb>
      </Fragment>
    );
  }
}
export default withRouter(MyBreadcrumb);
