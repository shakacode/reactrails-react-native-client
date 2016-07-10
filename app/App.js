import React from 'react';
import { Provider } from 'react-redux';

import createStore from './store/store';
import Comments from './components/Comments/Comments';

export default props => {
  const store = createStore(props);
  return (
    <Provider store={store}>
      <Comments comments={[{ author: 'Randy', text: 'row1' }, { author: 'Sheila', text: 'row2' }]} />
    </Provider>
  );
};
