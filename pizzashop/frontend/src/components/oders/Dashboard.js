import React, { Fragment } from "react";
import Pizzas from "./Pizzas";
import Orders from "./Orders";
import Formular from "./Formular";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

export default function Dashboard() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" component={Pizzas} exact />
          <Route path="/formular" component={Formular} exact />
          <Route path="/orders" component={Orders} exact />
        </Switch>
      </Router>
    </Fragment>
  );
}
