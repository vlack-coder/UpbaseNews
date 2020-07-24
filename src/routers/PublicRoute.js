import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { Route, Redirect } from "react-router-dom";
// import Navigation from "./Components/Navigation";

const PublicRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  // const { auth } = authContext;
  // let isAuthenticated = !!auth;
  // return (
  //   <Route
  //     {...rest}
  //     component={(props) =>
  //       isAuthenticated ? (
  //         <Redirect to="/home" />
  //       ) : (
  //         <Component {...props} />
  //       )
  //     }
  //   />
  // );
  return <Route {...rest} component={(props) => <Redirect to="/home" />} />;
};

export default PublicRoute;
