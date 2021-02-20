import React, { Component } from "react";
import { HashRouter, Switch } from "react-router-dom";
import PrivateRouter from "../../components/privateRouter/index";
import User from "../../views/movie/index";
import Home from "../../views/home/index";
class ContainerMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <PrivateRouter exact path="/index" component={Home}></PrivateRouter>
        <PrivateRouter
          exact
          path="/index/movie/list"
          component={User}
        ></PrivateRouter>
      </Switch>
    );
  }
}
export default ContainerMain;
