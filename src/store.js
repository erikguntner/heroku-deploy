import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};
const middleware = [thunk];

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const composingMiddlewareAndDevTools = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(
  rootReducer,
  initialState,
  composingMiddlewareAndDevTools
);

export default store;