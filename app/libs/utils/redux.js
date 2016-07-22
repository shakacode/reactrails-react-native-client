import _ from 'lodash/fp';
import { $$Map } from 'immutable';

export const makeActionCreator =
  (type: string, ...argNames) => (...args) => _.merge({ type }, _.zipObject(argNames, args));

export const createReducer = ($$initialState:$$Map, handlers:Object) =>
  ($$state : $$Map = $$initialState, action:{ type:string }) =>
    (
      action && handlers.hasOwnProperty(action.type) ?
      handlers[action.type]($$state, action) :
      $$state
    );
