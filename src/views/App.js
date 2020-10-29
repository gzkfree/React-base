import React, { Fragment } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import index from "./index/index.js"
import Login from "./Login/Login.js"
import routeData from '../common/router.js'
function App() {
  console.log(routeData.length)
  return (
    <div className="App">
      <Fragment>
        <HashRouter>
          <Switch >
            <Route path="/" component={index} />
            <Route path="/home" component={index} />
            {/* <Route path="/home/login" component={Login} /> */}
            <Redirect from="/" to="/home" />
          </Switch>
        </HashRouter>
      </Fragment>
    </div>
  )
}
export default App