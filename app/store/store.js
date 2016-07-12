import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import _ from 'lodash/fp';

import loggerMiddleware from '../libs/middlewares/loggerMiddleware';
import reducers, { initialStates } from '../reducers';
import sagas from '../sagas';

export default () => {
  const initialState = {
    $$commentsStore: initialStates.$$commentsState,
  };

  const reducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();
  const composedStore = __DEV__ ?
    compose(applyMiddleware(sagaMiddleware, loggerMiddleware)) :
    compose(applyMiddleware(sagaMiddleware));
  const store = composedStore(createStore)(reducer, initialState);
  _.each(saga => sagaMiddleware.run(saga))(sagas);

  return store;
};
