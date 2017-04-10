import React from "react";
import { ToDo } from "./pages";
import { MainLayout } from "./views";
import { Route, IndexRoute } from "react-router";


export default (

  <Route path="/" component={MainLayout}>
   <IndexRoute component={ToDo}/>
   <Route path="*" component={ToDo}/>
  </Route>
);

