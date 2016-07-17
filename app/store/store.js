import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import _ from 'lodash/fp';

import loggerMiddleware from 'ReactNativeTutorial/app/libs/middlewares/loggerMiddleware';
import reducers, { initialStates } from 'ReactNativeTutorial/app/reducers';
import sagas from 'ReactNativeTutorial/app/sagas';

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
