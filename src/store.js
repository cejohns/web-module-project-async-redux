import { configureStore } from '@reduxjs/toolkit';
import universitiesReducer from './universitiesReducer';

const store = configureStore({
  reducer: {
    universities: universitiesReducer,
  },
});

export default store;
