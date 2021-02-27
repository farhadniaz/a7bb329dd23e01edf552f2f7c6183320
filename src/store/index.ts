import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
const initialState = {};

export default createStore(
  combineReducers(reducers),
  initialState,
  composeWithDevTools(applyMiddleware())
);
