import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "./routes";

const PrivateRoute = (props) => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <div>
      {isLoggedIn ? (
        <Route {...props} />
      ) : (
        <Redirect
          to={{
            pathname: routes.login.path,
            state: { from: props.location },
          }}
        />
      )}
    </div>
  );
};

export default PrivateRoute;