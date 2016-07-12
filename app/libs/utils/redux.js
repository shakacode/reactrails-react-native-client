import _ from 'lodash/fp';

export const makeActionCreator =
  (type, ...argNames) => (...args) => _.merge({ type }, _.zipObject(argNames, args));
