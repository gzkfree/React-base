import React, { Fragment } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import index from "./index/index.js"
import Login from "./Login/Login.js"

import PrivateRoeter from '../components/privateRouter/index'
function App() {
  return (
    <div className="App">
      <Fragment>
        <HashRouter>
          <Switch >
            <PrivateRoeter path="/" component={index}></PrivateRoeter>
            <Redirect from="/" to="/home" />
          </Switch>
        </HashRouter>
      </Fragment>
    </div>
  )
}
export default App