import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import AppReducer from './reduxes/reducers';
import RootContainer from 'containers/RootContainer';

const store = createStore(AppReducer, applyMiddleware(thunk));

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
