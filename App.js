import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/configureStore';

import Navigation from './src/navigation/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
