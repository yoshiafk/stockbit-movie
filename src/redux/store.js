import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducers";
import thunk from "redux-thunk";

const middlewares = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
