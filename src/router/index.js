import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "../pages";

const Routes = () => (
 <Router>
  <Switch>
   <Route path="/" exact component={Pages.Landing} />
   <Route path="/create" exact component={Pages.CreateWallet} />
  </Switch>
 </Router>
);

export default Routes;
