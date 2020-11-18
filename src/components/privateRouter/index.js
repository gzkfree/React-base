import React from "react";
import { Route, Redirect } from "react-router-dom";
import store from "../../store/index";
import { Authorization_update } from "../../store/action/user";
const privateRouter = ({ component: Component, ...rest }) => {
  const token = store.getState().user.Authorization;
  console.log(rest);
  return (
    <Route
      {...rest}
      render={(routerProps) =>
        !!token ? (
          <Component {...routerProps}></Component>
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
            }}
          />
        )
      }
    />
  );
};
export default privateRouter;
