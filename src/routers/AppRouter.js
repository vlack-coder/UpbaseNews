import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Navigation from "../Components/Navigation";
// import PageRender from './PageRenderer'
// import "./firebase/firebase";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Entertainment from "../pages/Entertainment";
import Politics from "../pages/Politics";
import Sport from "../pages/Sports";

// import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Navigation />
    <Switch>
      {/* <Route path='/:page' component={PageRender} /> */}
      <Route path="/Home" component={Home} />
      <Route path="/Politics" component={Politics} />
      <Route path="/Sports" component={Sport} />
      <Route path="/Entertainment" component={Entertainment} />
      <Route path="/Login" component={Login} />
      <Route
        exact={true}
        path="/"
        render={() => <Redirect to="Home" />}
      />
      <Route component={() => 404} />
    </Switch>
  </Router>
);

export default AppRouter;
