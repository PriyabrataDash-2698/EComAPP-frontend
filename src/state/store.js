// const { legacy_createStore, applyMiddleware, combineReducers } = require("redux");
// const { thunk } = require("redux-thunk");
// const { authReducer } = require("./Auth/Reducer");

// const rootReducers = combineReducers({
//     auth:authReducer
// })
// export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  product: customerProductReducer,
  cart: cartReducer
});

export const store = legacy_createStore(
  rootReducers,
  applyMiddleware(thunk)
);
