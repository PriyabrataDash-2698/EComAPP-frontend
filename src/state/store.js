const { legacy_createStore, applyMiddleware, combineReducers } = require("redux");
const { thunk } = require("redux-thunk");
const { authReducer } = require("./Auth/Reducer");

const rootReducers = combineReducers({
    auth:authReducer
})
const store = legacy_createStore(rootReducers,applyMiddleware(thunk))