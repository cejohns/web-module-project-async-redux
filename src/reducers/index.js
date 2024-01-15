import { combineReducers } from 'redux';
import universitiesReducer from './universitiesReducer';
// import other reducers if you have any

const rootReducer = combineReducers({
  universities: universitiesReducer,
  // other reducers go here
});

export default rootReducer;
