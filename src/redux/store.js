import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';
import compose from './compose';

import notificationMiddleware from './middlewares/notification';

export async function configureStore(preloadedState) {
  return createStore(rootReducer, preloadedState, compose(applyMiddleware(thunkMiddleware, notificationMiddleware)));
}
