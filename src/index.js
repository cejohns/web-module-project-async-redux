import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
//import thunk from 'redux-thunk';
import universitiesReducer from '/src/reducers/universitiesReducer';
import UniversitiesList from './components/UniversitiesList';

const store = configureStore({
  reducer: {
    universities: universitiesReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <UniversitiesList />
  </Provider>,
  document.getElementById('root')
);