// @flow
import React from 'react';
import { Provider } from 'react-redux';

import createStore from './store/store';
import ReduxContainer from './containers/ReduxContainer';

export default () => {
  const store = createStore();
  return (
    <Provider store={store}>
      <ReduxContainer />
    </Provider>
  );
};
