import axios from 'axios';
import {
  FETCH_UNIVERSITIES_REQUEST,
  FETCH_UNIVERSITIES_SUCCESS,
  FETCH_UNIVERSITIES_FAILURE,
} from './universitiesActionTypes';

export const fetchUniversities = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_UNIVERSITIES_REQUEST });

    axios
      .get('http://universities.hipolabs.com/search?country=United+States')
      .then((response) => {
        dispatch({
          type: FETCH_UNIVERSITIES_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_UNIVERSITIES_FAILURE,
          payload: error.message,
        });
      });
  };
};
