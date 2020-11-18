import React, { Component } from "react";
import { HashRouter, Switch } from "react-router-dom";
import PrivateRouter from "../../components/privateRouter/index";
import User from "../../views/user/index";
class ContainerMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <PrivateRouter
          exact
          path="/index/user/index"
          component={User}
        ></PrivateRouter>
      </Switch>
    );
  }
}
export default ContainerMain;
