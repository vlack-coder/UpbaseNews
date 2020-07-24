import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import Navigation from "../Components/Navigation";

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  const authContext = useContext(AuthContext);

  const { auth } = authContext;
  let isAuthenticated = !!auth
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <div>
            {/* <Navigation /> */}
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute


