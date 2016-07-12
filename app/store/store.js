import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import _ from 'lodash/fp';

import loggerMiddleware from '../libs/middlewares/loggerMiddleware';
import reducers, { initialStates } from '../reducers';
import sagas from '../sagas';

export default () => {
  const { $$commentsState } = initialStates;
  const initialState = {
    $$commentsStore: $$commentsState.merge({
      $$comments: [],
    }),
  };

  const reducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();
  const composedStore = compose(
    applyMiddleware(sagaMiddleware, loggerMiddleware)
  );
  const store = composedStore(createStore)(reducer, initialState);
  _.each(saga => sagaMiddleware.run(saga))(sagas);

  return store;
};
