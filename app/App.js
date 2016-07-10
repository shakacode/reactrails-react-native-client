import React from 'react';
import { Provider } from 'react-redux';

import createStore from './store/store';
import CommentsContainer from './containers/CommentsContainer';

export default () => {
  const store = createStore();
  return (
    <Provider store={store}>
      <CommentsContainer />
    </Provider>
  );
};
