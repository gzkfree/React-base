import React, { Fragment } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import index from "./index/index.js"
import Login from "./Login/index.js"
import PrivateRoeter from '../components/privateRouter/index'
function App() {
  return (
    <div className="App">
      <Fragment>
        <HashRouter>
          <Switch >
            <PrivateRoeter exact path="/" component={index}></PrivateRoeter>
            <PrivateRoeter exact path="/Login" component={Login}></PrivateRoeter>
            <Redirect from="/" to="/home" />
          </Switch>
        </HashRouter>
      </Fragment>
    </div>
  )
}
export default App