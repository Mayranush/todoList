import React from "react";
import { Home } from "./pages";
import { MainLayout } from "./views";
import { Route, IndexRoute } from "react-router";


export default (

  <Route path="/" component={MainLayout}>
   <IndexRoute component={Home}/>
   <Route path="*" component={Home}/>
  </Route>
);

