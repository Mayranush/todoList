import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { toDoList } from "../reducers";

const reducers = combineReducers({
  toDoList

});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
    // window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


// Link to store object saved to window to grant access to it for test purposes
// Do not use it directly in code
if (window && !window.store) {
  window.store = store;
}


export default store;

