import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import ThunkMiddleware from 'redux-thunk';

const middlewares = [ThunkMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
