import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Reducer } from './Reducer';

export function ConfigureStore() {
  return createStore(Reducer, applyMiddleware(logger));
}
