import React, { Fragment } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import index from "./index/index.js";
import Login from "./Login/index.js";
import User from "../views/user/index";
import PrivateRouter from "../components/privateRouter/index";
function App() {
  return (
    <div className="App">
      <Fragment>
        <HashRouter>
          <Switch>
            <PrivateRouter path="/index" component={index}></PrivateRouter>
            <Route exact path="/Login" component={Login}></Route>
            <Redirect to={{ pathname: "/Login" }} />
          </Switch>
        </HashRouter>
      </Fragment>
    </div>
  );
}
export default App;
