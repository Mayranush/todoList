import React from "react";
import {Router, browserHistory} from "react-router";
import {Provider} from "react-redux"
import routes from "./routes";
import store from "./store/store";

class App extends React.Component {

 render() {
    return (
      <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
      </Provider>
 )
  }
}

export default App;
