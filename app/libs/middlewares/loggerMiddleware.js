/* eslint no-console: 0 */
import _ from 'lodash/fp';

export default function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action);

    // Call the next dispatch method in the middleware chain.
    const result = next(action);

    // We can't _read_ immutable objects in console out-of-the-box.
    const state = getState();

    const transformer = value => (value.toJS ? value.toJS() : value);
    const readableState = _.mapValues(transformer)(state);
    console.log('state after dispatch', readableState);

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return result;
  };
}
