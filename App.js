import React from 'react';
import RootNavigation from './App/Navigation/RootNavigation';
import { Provider } from 'react-redux';
import { store } from './App/Redux/store'
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
