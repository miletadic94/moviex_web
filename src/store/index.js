import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../redux/reducers";
import rootSaga from "../redux/sagas";

const reduxDevToolEnchancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const middlewares = [applyMiddleware(sagaMiddleware), reduxDevToolEnchancer];

export default createStore(rootReducer, {}, compose(...middlewares));

sagaMiddleware.run(rootSaga);
