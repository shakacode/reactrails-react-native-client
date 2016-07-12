import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from '../libs/middlewares/loggerMiddleware';
import reducers, { initialStates } from '../reducers';

export default () => {
  const initialState = {
    $$commentsStore: initialStates.$$commentsState,
  };

  const reducer = combineReducers(reducers);
  const composedStore = __DEV__ ?
    compose(applyMiddleware(thunkMiddleware, loggerMiddleware)) :
    compose(applyMiddleware(thunkMiddleware));

  return composedStore(createStore)(reducer, initialState);
};
