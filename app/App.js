import React from 'react';
import { Provider } from 'react-redux';

import createStore from './store/store';
import HelloWorld from './components/HelloWorld';

export default props => {
  const store = createStore(props);
  return (
    <Provider store={store}>
      <HelloWorld />
    </Provider>
  );
};
