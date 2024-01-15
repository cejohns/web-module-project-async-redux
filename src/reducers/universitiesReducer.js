import {
  FETCH_UNIVERSITIES_REQUEST,
  FETCH_UNIVERSITIES_SUCCESS,
  FETCH_UNIVERSITIES_FAILURE,
} from '../actions/universitiesActionTypes';

const initialState = {
  universities: [],
  loading: false,
  error: null,
};

const universitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UNIVERSITIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_UNIVERSITIES_SUCCESS:
      return { ...state, loading: false, universities: action.payload };
    case FETCH_UNIVERSITIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default universitiesReducer;